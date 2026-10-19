import { useHabits } from "./useHabits";
import { DayProgress, Habit } from "../types/habit";

export const useProgress = () => {
  const { habits, loading, error, retry } = useHabits();

  // Mock progress calculation
  const total = habits.length;
  const now = new Date();
  const today = now.toISOString().split("T")[0];
  const doneToday = habits.filter((habit) =>
    habit.completions.includes(today)
  ).length;
  const todayPercent = total > 0 ? Math.round((doneToday / total) * 100) : 0;

  // Mock last 7 days data
  const last7Days: DayProgress = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(now.getDate() - i);
    const dayLabel = date.toLocaleDateString("id-ID", { weekday: "short" });
    const dateStr = date.toISOString().split("T")[0];
    const dayDone = habits.filter((habit) =>
      habit.completions.includes(dateStr)
    ).length;
    const dayPercent = total > 0 ? Math.round((dayDone / total) * 100) : 0;
    last7Days.push({
      date: dateStr,
      dayLabel,
      percent: dayPercent,
    });
  }

  // Mock weekly average
  const weeklyAverage =
    last7Days.length > 0
      ? Math.round(
          (last7Days.reduce((sum, day) => sum + day.percent, 0) /
            last7Days.length)
        )
      : 0;

  return {
    total,
    doneToday,
    todayPercent,
    last7Days,
    weeklyAverage,
  };
};
