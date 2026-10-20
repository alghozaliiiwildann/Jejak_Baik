// SEMENTARA (Dev C): chip kategori versi layar. components/CategoryChip milik
// Dev B masih error (referensi `selected` di luar scope → ReferenceError saat
// modul dimuat), jadi layar Detail memakai versi ini sampai Dev B memperbaikinya.
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from './theme';

interface CategoryChipProps {
  category: string;
  selected?: boolean;
  onPress?: () => void;
}

export const CategoryChip = ({ category, selected, onPress }: CategoryChipProps) => {
  const styleSheet = [styles.chip, selected && styles.chipSelected];

  if (!onPress) {
    return (
      <View style={styleSheet}>
        <Text style={[styles.text, selected && styles.textSelected]}>{category}</Text>
      </View>
    );
  }

  return (
    <Pressable
      style={styleSheet}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: !!selected }}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>{category}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: colors.softGreen,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignSelf: 'flex-start',
  },
  chipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.success,
  },
  textSelected: {
    color: '#FFFFFF',
  },
});
