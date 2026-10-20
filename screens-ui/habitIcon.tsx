// SEMENTARA (Dev C): peta ikon kebiasaan (nama lucide) sampai HabitIconPicker
// dari Dev B tersedia. Nilai icon mengikuti kontrak types/habit.ts.
import React from 'react';
import type { ComponentType } from 'react';
import {
  BookOpen,
  CircleUser,
  Code,
  Droplet,
  Dumbbell,
  Heart,
  Leaf,
  Star,
} from 'lucide-react-native';

export type HabitIconComponent = ComponentType<{
  size?: number;
  color?: string;
  strokeWidth?: number;
}>;

export type HabitIconOption = {
  value: string;
  label: string;
  Icon: HabitIconComponent;
};

export const HABIT_ICON_OPTIONS: HabitIconOption[] = [
  { value: 'droplet', label: 'Air/minum', Icon: Droplet },
  { value: 'dumbbell', label: 'Olahraga', Icon: Dumbbell },
  { value: 'book-open', label: 'Buku', Icon: BookOpen },
  { value: 'code', label: 'Kode', Icon: Code },
  { value: 'leaf', label: 'Meditasi/tanaman', Icon: Leaf },
  { value: 'heart', label: 'Hati', Icon: Heart },
  // Catatan: lucide-react-native 1.59 tidak mengekspor "Smile";
  // CircleUser dipakai sebagai wajah sementara sampai aset Dev B tersedia.
  { value: 'smile', label: 'Wajah senyum', Icon: CircleUser },
  { value: 'star', label: 'Bintang', Icon: Star },
];

export function getHabitIcon(name: string): HabitIconComponent {
  const found = HABIT_ICON_OPTIONS.find((option) => option.value === name);
  return found ? found.Icon : Leaf;
}

/**
 * Komponen ikon statis (didefinisikan di module scope) agar aman dari aturan
 * react-hooks/static-components — layar cukup memakai <HabitIcon name="..." />.
 */
export const HabitIcon = ({
  name,
  size = 24,
  color,
  strokeWidth,
}: {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}) =>
  React.createElement(getHabitIcon(name), { size, color, strokeWidth });
