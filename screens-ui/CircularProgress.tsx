// SEMENTARA (Dev C): lingkaran progres versi layar (components/CircularProgress
// milik Dev B belum bisa dirender, container-nya berukuran 0). Ganti saat komponen
// Dev B siap.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { colors, fonts } from './theme';

interface CircularProgressProps {
  percent: number;
  size?: number;
}

export const CircularProgress = ({ percent, size = 96 }: CircularProgressProps) => {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));
  const strokeWidth = Math.max(8, Math.round(size * 0.09));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colors.softGreen}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colors.primary}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View style={styles.label} pointerEvents="none">
        <Text style={[styles.percent, { fontSize: Math.round(size * 0.22) }]}>
          {clamped}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percent: {
    fontFamily: fonts.bold,
    color: colors.text,
    fontWeight: '700',
  },
});
