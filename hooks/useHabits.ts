import { useContext } from "react";

import { HabitsContext, type HabitsContextValue, getHabitPure } from "../context/HabitsContext";

/** Kontrak: { habits, loading, error, retry, addHabit, toggleToday, deleteHabit, getHabit } */
export function useHabits(): HabitsContextValue {
  const context = useContext(HabitsContext);
  if (!context) {
    throw new Error("useHabits harus dipakai di dalam <HabitsProvider>.");
  }
  return context;
}

export { getHabitPure as getHabit };
