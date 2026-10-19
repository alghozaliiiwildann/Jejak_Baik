import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useHabits } from '../hooks/useHabits';
import { useProgress } from '../hooks/useProgress';

export default function SplashScreen() {
  const { habits, loading } = useHabits();
  const { todayPercent } = useProgress();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Memuat data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>JejakBaik</Text>
      <Text style={styles.subtitle}>Catat Kebiasaanmu, Lihat Perkembanganmu</Text>
      <Text style={styles.progressText}>Progres hari ini: {todayPercent}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  loadingContainer: {
    padding: 20,
  },
  loadingText: {
    color: '#1F2937',
    fontSize: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: '800' as any,
    marginBottom: 8,
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
  },
  progressText: {
    fontSize: 14,
    color: '#15803D',
    marginTop: 24,
  });
});
