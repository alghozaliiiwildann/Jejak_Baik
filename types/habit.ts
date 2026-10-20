type HabitCategory = "Kesehatan" | "Produktivitas" | "Pendidikan" | "Hiburan" | "Self Care" | "Lainnya";

type Habit = {
  id: string;
  name: string;
  target?: string;
  category: HabitCategory;
  icon: string;
  createdAt: string; // YYYY-MM-DD lokal
  completions: string[]; // daftar tanggal lokal YYYY-MM-DD, tanpa duplikat
};

type DayProgress = {
  date: string; // YYYY-MM-DD lokal
  dayLabel: string; // Sen, Sel, ...
  percent: number; // 0-100
};

export type { HabitCategory, Habit, DayProgress };
