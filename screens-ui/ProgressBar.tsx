// SEMENTARA (Dev C): progress bar versi layar (components/ProgressBar milik Dev B
// belum terlihat karena track-nya tak punya lebar). Ganti saat komponen Dev B siap.
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, radius } from './theme';

interface ProgressBarProps {
  percent: number;
}

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));

  return (
    <View
      style={styles.track}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: clamped }}
    >
      <View style={[styles.fill, { width: `${clamped}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: radius.chip,
    backgroundColor: colors.primary,
  },
});
