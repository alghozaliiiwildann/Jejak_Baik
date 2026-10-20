import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

interface CategoryChipProps {
  category: string;
  selected?: boolean;
  onPress?: () => void;
}

export const CategoryChip = ({ category, selected, onPress }: CategoryChipProps) => {
  return (
    <Pressable style={[styles.chip, selected && styles.selectedChip]} onPress={onPress}>
      <Text style={[styles.chipText, selected && styles.selectedChipText]}>
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
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: 8,
    marginBottom: 8,
  },
  selectedChip: {
    backgroundColor: '#16A34A',
    borderColor: '#16A34A',
  },
  chipText: {
    color: '#1F2937',
    fontSize: 12,
    fontWeight: '600' as any,
  },
  selectedChipText: {
    color: '#FFFFFF',
  },
});
