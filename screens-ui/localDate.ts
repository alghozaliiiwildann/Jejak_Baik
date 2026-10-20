// SEMENTARA (Dev C): helper tanggal lokal sesuai aturan keras PRD (YYYY-MM-DD lokal,
// tanpa toISOString untuk tanggal). Akan dipindah ke utils/date.ts milik Dev A.
export function toLocalDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1);
}

/** Contoh: "Senin, 20 Oktober 2026" */
export function formatFullDate(dateStr: string): string {
  return parseLocalDate(dateStr).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Contoh: "20 Okt" (untuk label grafik) */
export function formatShortDate(dateStr: string): string {
  return parseLocalDate(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
  });
}

/** Contoh: "Senin, 20 Oktober 2026" untuk hari ini */
export function formatToday(date: Date = new Date()): string {
  return formatFullDate(toLocalDateString(date));
}

export function greetingByHour(date: Date = new Date()): string {
  const hour = date.getHours();
  if (hour < 11) return 'Selamat pagi!';
  if (hour < 15) return 'Selamat siang!';
  if (hour < 18) return 'Selamat sore!';
  return 'Selamat malam!';
}
