// SEMENTARA (Dev C): HabitCard versi layar sesuai kontrak components/HabitCard.
// Ganti import ke components/HabitCard saat komponen Dev B siap.
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Check } from 'lucide-react-native';
import type { Habit } from '../types/habit';
import { HabitIcon } from './habitIcon';
import { colors, fonts, radius, shadow, HIT_SIZE } from './theme';

interface HabitCardProps {
  habit: Habit;
  doneToday: boolean;
  onToggle: () => void;
  onPress: () => void;
}

export const HabitCard = ({ habit, doneToday, onToggle, onPress }: HabitCardProps) => {
  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Buka detail kebiasaan ${habit.name}`}
    >
      <View style={styles.iconBox}>
        <HabitIcon name={habit.icon} size={22} color={colors.primary} />
      </View>

      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={1}>
          {habit.name}
        </Text>
        {habit.target ? (
          <Text style={styles.target} numberOfLines={1}>
            Target: {habit.target}
          </Text>
        ) : null}
      </View>

      <Pressable
        onPress={onToggle}
        hitSlop={8}
        style={[styles.checkbox, doneToday && styles.checkboxDone]}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: doneToday }}
        accessibilityLabel={
          doneToday
            ? `Batalkan penyelesaian ${habit.name} hari ini`
            : `Tandai ${habit.name} selesai hari ini`
        }
      >
        {doneToday ? <Check size={20} color="#FFFFFF" strokeWidth={3} /> : null}
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
    marginBottom: 12,
    ...shadow.card,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.softGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  body: {
    flex: 1,
    marginRight: 8,
  },
  name: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: colors.text,
  },
  target: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  checkbox: {
    width: HIT_SIZE,
    height: HIT_SIZE,
    borderRadius: radius.button,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
  },
  checkboxDone: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
});
