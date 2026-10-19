type HabitCategory = "Kesehatan" | "Produktivitas" | "Pendidikan" | "Hiburan" | "Self Care" | "Lainnya";

type Habit = {
  id: string;
  name: string;
  target?: string;
  category: HabitCategory;
  icon: string;
  createdAt: string; // ISO date
  completions: string[]; // daftar tanggal lokal YYYY-MM-DD
};

type DayProgress = {
  date: string;
  dayLabel: string;
  percent: number;
};

export { HabitCategory, Habit, DayProgress };
