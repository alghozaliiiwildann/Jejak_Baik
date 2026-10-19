import { Habit, HabitCategory } from "../types/habit";
import * as AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "jejakbaik.habits.v1";

export const useHabits = () => {
  // Mock data for development
  const mockHabits: Habit[] = [
    {
      id: "habit-1",
      name: "Minum air putih",
      target: "8 gelas",
      category: "Kesehatan",
      icon: "droplet",
      createdAt: new Date().toISOString(),
      completions: [],
    },
    {
      id: "habit-2",
      name: "Olahraga 30 menit",
      target: "30 menit",
      category: "Produktivitas",
      icon: "dumbbell",
      createdAt: new Date().toISOString(),
      completions: [],
    },
    {
      id: "habit-3",
      name: "Baca buku 30 menit",
      target: "30 menit",
      category: "Pendidikan",
      icon: "book-open",
      createdAt: new Date().toISOString(),
      completions: [],
    },
    {
      id: "habit-4",
      name: "Belajar coding 1 jam",
      target: "1 jam",
      category: "Produktivitas",
      icon: "code",
      createdAt: new Date().toISOString(),
      completions: [],
    },
    {
      id: "habit-5",
      name: "Meditasi 10 menit",
      target: "10 menit",
      category: "Self Care",
      icon: "leaf",
      createdAt: new Date().toISOString(),
      completions: [],
    },
  ];

  const loading = false;
  const error = null;

  const retry = async (): Promise<void> => {
    // In production, this would re-fetch from AsyncStorage
    return Promise.resolve();
  };

  const addHabit = async (input: {
    name: string;
    target?: string;
    category: HabitCategory;
    icon: string;
  }): Promise<void> => {
    const newHabit: Habit = {
      id: `habit-${Date.now()}`,
      name: input.name,
      target: input.target,
      category: input.category,
      icon: input.icon,
      createdAt: new Date().toISOString(),
      completions: [],
    };
    mockHabits.push(newHabit);
  };

  const toggleToday = async (id: string): Promise<void> => {
    // In production, this would toggle completion in AsyncStorage
  };

  const deleteHabit = async (id: string): Promise<void> => {
    // In production, this would delete from AsyncStorage
  };

  const getHabit = (id: string): Habit | undefined => {
    return mockHabits.find((habit) => habit.id === id);
  };

  return {
    habits: mockHabits,
    loading,
    error,
    retry,
    addHabit,
    toggleToday,
    deleteHabit,
    getHabit,
  };
};
