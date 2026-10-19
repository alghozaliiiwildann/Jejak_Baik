import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useHabits } from '../../hooks/useHabits';
import { useProgress } from '../../hooks/useProgress';

export default function HomeScreen() {
  const { habits } = useHabits();
  const { todayPercent, doneToday, total } = useProgress();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hari Ini</Text>
      <Text style={styles.progress}>Progres: {todayPercent}%</Text>
      <Text style={styles.summary}>
        {doneToday} dari {total} kebiasaan selesai
      </Text>
      {habits.length === 0 ? (
        <Text style={styles.empty}>Belum ada kebiasaan</Text>
      ) : (
        <View style={styles.list}>
          {habits.map((habit) => (
            <View key={habit.id} style={styles.habitItem}>
              <Text style={styles.habitName}>{habit.name}</Text>
              <Text style={styles.habitTarget}>{habit.target || ''}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 24,
    fontWeight: '800' as any,
    marginBottom: 16,
    color: '#1F2937',
  },
  progress: {
    fontSize: 18,
    color: '#15803D',
    marginBottom: 8,
  },
  summary: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
  },
  empty: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginVertical: 40,
  },
  list: {},
  habitItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 8,
    borderRadius: 12,
  },
  habitName: {
    fontSize: 16,
    color: '#1F2937',
  },
  habitTarget: {
    fontSize: 14,
    color: '#6B7280',
  },
});
