/**
 * Util tanggal lokal JejakBaik.
 * ATURAN KERAS: semua tanggal selalu format YYYY-MM-DD lokal (bukan toISOString).
 */

const HARI_MINGGU = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
] as const;

const HARI_PENDEK = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"] as const;

const BULAN = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
] as const;

function pad2(value: number): string {
  return value < 10 ? `0${value}` : String(value);
}

/** Format Date → YYYY-MM-DD berdasarkan waktu lokal (bukan UTC). */
export function getTodayLocal(date: Date = new Date()): string {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

/** Parse "YYYY-MM-DD" lokal → Date (jam 00:00 lokal). Bukan new Date(string). */
export function parseTanggalLokal(date: string): Date {
  const [year, month, day] = date.split("-").map(Number);
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    throw new Error(`Format tanggal tidak valid: "${date}" (diharapkan YYYY-MM-DD).`);
  }
  return new Date(year, month - 1, day);
}

/**
 * n tanggal terakhir (termasuk hari ini), urut menaik, format YYYY-MM-DD lokal.
 * Berfungsi lintas bulan dan lintas tahun. n <= 0 → [].
 */
export function getLastNDays(n: number, from: Date = new Date()): string[] {
  if (!Number.isFinite(n) || n <= 0) return [];
  const base = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const result: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    result.push(getTodayLocal(new Date(base.getFullYear(), base.getMonth(), base.getDate() - i)));
  }
  return result;
}

/** Contoh hasil: "Senin, 19 Oktober 2026". Menerima "YYYY-MM-DD" atau Date. */
export function formatTanggalIndonesia(date: string | Date): string {
  const d = typeof date === "string" ? parseTanggalLokal(date) : date;
  return `${HARI_MINGGU[d.getDay()]}, ${d.getDate()} ${BULAN[d.getMonth()]} ${d.getFullYear()}`;
}

/** Sapaan berdasarkan jam lokal: pagi (04-10), siang (11-14), sore (15-18), malam (19-03). */
export function getGreeting(now: Date = new Date()): "pagi" | "siang" | "sore" | "malam" {
  const hour = now.getHours();
  if (hour >= 4 && hour < 11) return "pagi";
  if (hour >= 11 && hour < 15) return "siang";
  if (hour >= 15 && hour < 19) return "sore";
  return "malam";
}

/** Label hari pendek: "Sen", "Sel", ... Menerima "YYYY-MM-DD" atau Date. */
export function getDayLabel(date: string | Date): string {
  const d = typeof date === "string" ? parseTanggalLokal(date) : date;
  return HARI_PENDEK[d.getDay()];
}
