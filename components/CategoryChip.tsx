import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface CategoryChipProps {
  category: string;
  selected?: boolean;
  onPress?: () => void;
}

export const CategoryChip = ({ category, selected, onPress }: CategoryChipProps) => {
  return (
    <Pressable style={styles.chip} onPress={onPress}>
      <Text style={styles.chipText}>
        {category}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: selected ? '#16A34A' : '#FFFFFF',
    borderWidth: 1,
    borderColor: selected ? '#16A34A' : '#E5E7EB',
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    color: selected ? '#FFFFFF' : '#1F2937',
    fontSize: 12,
    fontWeight: '600' as any,
  },
});
