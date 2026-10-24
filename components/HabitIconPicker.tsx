import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius } from '../theme';

const HABIT_ICON_OPTIONS = [
  { value: 'kesehatan', label: 'Kesehatan' },
  { value: 'produktivitas', label: 'Produktivitas' },
  { value: 'pendidikan', label: 'Pendidikan' },
  { value: 'hiburan', label: 'Hiburan' },
  { value: 'self care', label: 'Self Care' },
  { value: 'lainnya', label: 'Lainnya' },
] as const;

interface HabitIconPickerProps {
  value: string;
  onChange: (icon: string) => void;
}

export const HabitIconPicker = ({ value, onChange }: HabitIconPickerProps) => {
  return (
    <View style={styles.grid} accessibilityRole="button" accessibilityState={{ selected: false }} accessibilityLabel="Pilih ikon kebiasaan">
      {HABIT_ICON_OPTIONS.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            style={[styles.tile, selected && styles.tileSelected]}
            accessibilityRole="button"
            accessibilityState={{ selected }}
            accessibilityLabel={`Pilih ikon ${option.label}`}
          >
            <View style={styles.iconText}><Text>{option.label.charAt(0)}</Text></View>
            <Text style={[styles.label, selected && styles.labelSelected]} numberOfLines={1}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tile: {
    width: '33%',
    minWidth: 44,
    minHeight: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: radius.button,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  tileSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.softGreen,
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 6,
  },
  labelSelected: {
    color: colors.success,
    fontFamily: fonts.medium,
  },
  iconText: {
    color: colors.text,
    fontSize: 12,
    fontFamily: fonts.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
});