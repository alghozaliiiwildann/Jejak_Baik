import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

interface CircularProgressProps {
  percent: number;
  size?: number;
}

export const CircularProgress = ({ percent, size = 128 }: CircularProgressProps) => {
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;

  // Calculate the dash offset based on progress
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          {
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          },
        ]}
      />
      <Text style={styles.percentText}>{percent}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 0,
    height: 0,
  },
  circle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 16,
    borderColor: '#E5E7EB',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  percentText: {
    position: 'absolute',
    top: 50,
    left: 50,
    transform: [{ translateX: -20 }, { translateY: -12 }],
    fontSize: 18,
    fontWeight: '600' as any,
    color: '#1F2937',
    textAlign: 'center',
  },
});
