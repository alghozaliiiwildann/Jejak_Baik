/**
 * Fungsi murni perhitungan progres JejakBaik.
 * Tidak ada side effect, tidak ada akses penyimpanan — aman diuji unit test.
 */
import type { DayProgress, Habit } from "../types/habit";
import { getDayLabel, getLastNDays, getTodayLocal } from "./date";

/**
 * Persentase kebiasaan yang selesai pada tanggal tertentu (dibulatkan 0-100).
 * Aman saat daftar kosong (total 0) → mengembalikan 0.
 * Hitungannya per-kebiasaan, jadi duplikasi tanggal di completions tidak melipatgandakan hasil.
 */
export function calcDailyPercent(habits: Habit[], date: string): number {
  if (habits.length === 0) return 0;
  const done = habits.filter((habit) => habit.completions.includes(date)).length;
  return Math.round((done / habits.length) * 100);
}

/** 7 hari terakhir (termasuk hari ini), urut menaik, lengkap dengan label hari dan persentase. */
export function calcLast7Days(habits: Habit[]): DayProgress[] {
  return getLastNDays(7).map((date) => ({
    date,
    dayLabel: getDayLabel(date),
    percent: calcDailyPercent(habits, date),
  }));
}

/** Rata-rata persentase penyelesaian 7 hari terakhir (dibulatkan 0-100). 0 saat tidak ada hari/data. */
export function calcWeeklyAverage(habits: Habit[]): number {
  const days = calcLast7Days(habits);
  if (days.length === 0) return 0;
  const total = days.reduce((sum, day) => sum + day.percent, 0);
  return Math.round(total / days.length);
}
