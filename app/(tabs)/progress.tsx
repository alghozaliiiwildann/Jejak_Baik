import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useProgress } from '../../hooks/useProgress';

export default function ProgressScreen() {
  const { total, doneToday, todayPercent, last7Days, weeklyAverage } = useProgress();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress</Text>
      
      <View style={styles.todayCard}>
        <Text style={styles.todayPercent}>{todayPercent}%</Text>
        <Text style={styles.todayLabel}>Penyelesaian Hari Ini</Text>
        <Text style={styles.todaySummary}>
          {doneToday} dari {total} kebiasaan
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Ringkasan 7 Hari Terakhir</Text>
      <View style={styles.daysContainer}>
        {last7Days.map((day) => (
          <View key={day.date} style={styles.dayItem}>
            <Text style={styles.dayLabel}>{day.dayLabel}</Text>
            <Text style={styles.dayPercent}>{day.percent}%</Text>
          </View>
        ))}
      </View>

      <View style={styles.weeklyStats}>
        <Text style={statsStyle}>Rata-rata Mingguan: {weeklyAverage}%</Text>
      </View>
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
    marginBottom: 20,
    color: '#1F2937',
    textAlign: 'center',
  },
  todayCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  todayPercent: {
    fontSize: 48,
    fontWeight: '800' as any,
    color: '#16A34A',
  },
  todayLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  todaySummary: {
    fontSize: 14,
    color: '#1F2937',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600' as any,
    color: '#1F2937',
    marginBottom: 12,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dayItem: {
    width: '20%',
    textAlign: 'center',
  },
  dayLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  dayPercent: {
    fontSize: 24,
    fontWeight: '700' as any,
    color: '#16A34A',
  },
  weeklyStats: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
    marginTop: 20,
  },
});

const statsStyle = {
  fontSize: 14,
  color: '#1F2937',
  textAlign: 'center',
};
