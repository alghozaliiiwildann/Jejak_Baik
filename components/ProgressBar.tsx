import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
  percent: number;
}

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.percentText}>{percent}%</Text>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${percent}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    alignItems: 'center',
    marginVertical: 8,
  },
  percentText: {
    fontSize: 12,
    color: '#1F2937',
    marginBottom: 4,
  },
  barBackground: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden' as const,
  },
  barFill: {
    height: '100%',
    backgroundColor: '#16A34A',
  },
});
