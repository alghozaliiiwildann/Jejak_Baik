/**
 * Penyimpanan lokal kebiasaan JejakBaik (AsyncStorage).
 *
 * ATURAN KERAS:
 * - Key "jejakbaik.habits.v1", format {version:1, habits:[]}.
 * - Gagal baca (JSON rusak / format lama) → lempar error yang jelas.
 * - JANGAN pernah menimpa/menghapus data saat gagal baca.
 */
import AsyncStorage from "@react-native-async-storage/async-storage";

import type { Habit } from "../types/habit";

export const HABITS_STORAGE_KEY = "jejakbaik.habits.v1";

export class StorageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StorageError";
  }
}

type HabitsFile = { version: 1; habits: Habit[] };

/** Buang duplikat tanggal dan urutkan menaik (YYYY-MM-DD bisa diurutkan secara leksikografis). */
function normalizeCompletions(completions: string[]): string[] {
  return Array.from(new Set(completions)).sort();
}

function isValidHabit(value: unknown): value is Habit {
  if (typeof value !== "object" || value === null) return false;
  const h = value as Record<string, unknown>;
  return (
    typeof h.id === "string" &&
    h.id.length > 0 &&
    typeof h.name === "string" &&
    typeof h.category === "string" &&
    typeof h.icon === "string" &&
    typeof h.createdAt === "string" &&
    Array.isArray(h.completions) &&
    h.completions.every((c) => typeof c === "string")
  );
}

/**
 * Baca daftar kebiasaan dari penyimpanan lokal.
 * - Belum ada data → [].
 * - JSON rusak / format lama / struktur tak dikenal → StorageError yang jelas, TANPA menyentuh data.
 */
export async function loadHabits(): Promise<Habit[]> {
  let raw: string | null;
  try {
    raw = await AsyncStorage.getItem(HABITS_STORAGE_KEY);
  } catch {
    throw new StorageError(
      "Gagal membaca penyimpanan lokal JejakBaik. Data lama tidak dihapus, coba lagi."
    );
  }

  if (raw === null || raw.trim() === "") return [];

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new StorageError(
      "Data JejakBaik rusak (JSON tidak valid). Data lama TIDAK dihapus — perbaiki atau hapus aplikasi secara manual."
    );
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new StorageError(
      "Format data JejakBaik tidak dikenal. Data lama TIDAK dihapus."
    );
  }

  const file = parsed as { version?: unknown; habits?: unknown };

  if (file.version !== 1) {
    throw new StorageError(
      `Versi data JejakBaik tidak didukung (ditemukan: ${JSON.stringify(
        file.version
      )}, diharapkan: 1). Data lama TIDAK dihapus.`
    );
  }

  if (!Array.isArray(file.habits)) {
    throw new StorageError(
      "Struktur data JejakBaik tidak valid (habits bukan array). Data lama TIDAK dihapus."
    );
  }

  // Entri rusak dibuang dari hasil baca saja; penyimpanan tidak disentuh sampai ada simpan baru.
  return (file.habits as unknown[])
    .filter(isValidHabit)
    .map((habit) => ({ ...habit, completions: normalizeCompletions(habit.completions) }));
}

/**
 * Tulis seluruh daftar kebiasaan. Menormalkan completions (tanpa duplikat, terurut)
 * sebelum diserialisasi.
 */
export async function saveHabits(habits: Habit[]): Promise<void> {
  const file: HabitsFile = {
    version: 1,
    habits: habits.map((habit) => ({
      ...habit,
      completions: normalizeCompletions(habit.completions),
    })),
  };
  await AsyncStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(file));
}
