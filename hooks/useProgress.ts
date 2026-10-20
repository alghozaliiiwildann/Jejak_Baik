import { useMemo } from "react";

import { getTodayLocal } from "../utils/date";
import {
  calcDailyPercent,
  calcLast7Days,
  calcWeeklyAverage,
} from "../utils/progress";
import { useHabits } from "./useHabits";

/** Kontrak: { total, doneToday, todayPercent, last7Days, weeklyAverage } */
export function useProgress() {
  const { habits } = useHabits();

  return useMemo(() => {
    const today = getTodayLocal();
    const doneToday = habits.filter((habit) =>
      habit.completions.includes(today)
    ).length;

    return {
      total: habits.length,
      doneToday,
      todayPercent: calcDailyPercent(habits, today),
      last7Days: calcLast7Days(habits),
      weeklyAverage: calcWeeklyAverage(habits),
    };
  }, [habits]);
}
