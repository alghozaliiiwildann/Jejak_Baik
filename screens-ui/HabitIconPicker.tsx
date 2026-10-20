// SEMENTARA (Dev C): HabitIconPicker versi layar sesuai kontrak
// components/HabitIconPicker. Ganti saat komponen Dev B siap.
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { HABIT_ICON_OPTIONS } from './habitIcon';
import { colors, fonts, radius, HIT_SIZE } from './theme';

interface HabitIconPickerProps {
  value: string;
  onChange: (icon: string) => void;
}

export const HabitIconPicker = ({ value, onChange }: HabitIconPickerProps) => {
  return (
    <View style={styles.grid}>
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
            <option.Icon
              size={24}
              color={selected ? colors.primary : colors.textSecondary}
            />
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
    width: '30%',
    minWidth: HIT_SIZE,
    minHeight: HIT_SIZE + 20,
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
});
