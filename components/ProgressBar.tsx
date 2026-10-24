import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius } from '../theme';

interface ProgressBarProps {
  percent: number;
}

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));

  return (
    <View style={styles.container} accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: 100, now: clamped }} />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    alignItems: 'center',
    marginVertical: 8,
    minHeight: 44,
  },
  percentText: {
    fontSize: 12,
    color: colors.text,
  },
  barBackground: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: radius.chip,
    overflow: 'hidden',
    minHeight: 44,
  },
  barFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
});