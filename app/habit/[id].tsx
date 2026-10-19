import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useHabits, getHabit } from '../../hooks/useHabits';

export default function DetailHabitScreen({ params }: { params: { id: string } }) {
  const habit = getHabit(params.id);
  const { toggleToday } = useHabits();

  if (!habit) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{habit.name}</Text>
      
      <View style={styles.habitDetails}>
        <Text style={styles.iconWrapper}>
          {/* HabitIcon placeholder - would use lucide-react-native */}
          {habit.icon}
        </Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Target</Text>
          <Text style={styles.detailValue}>{habit.target || '—'}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Kategori</Text>
          <Text style={styles.detailValue}>{habit.category}</Text>
        </View>
      </View>

      <View style={styles.actionArea}>
        <Pressable style={styles.toggleButton} onPress={() => toggleToday(habit.id)}>
          <Text style={styles.toggleLabel}>
            {habit.completions.some(c => new Date(c).toISOString().split('T')[0] === new Date().toISOString().split('T')[0]) ? 'Sudah selesai' : 'Selesai hari ini'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.actionArea} style={{ marginTop: 16 }}>
        <Pressable style={{ ...styles.toggleButton, backgroundColor: '#EF4444' }} onPress={() => {}}>
          <Text style={{ ...styles.toggleLabel, color: '#FFFFFF' }}>Hapus kebiasaan</Text>
        </Pressable>
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
    marginBottom: 24,
    color: '#1F2937',
    textAlign: 'center',
  },
  habitDetails: {
    marginBottom: 24,
  },
  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  detailValue: {
    fontSize: 14,
    color: '#1F2937',
  },
  actionArea: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginTop: 20,
  },
  toggleButton: {
    backgroundColor: '#16A34A',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  toggleLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600' as any,
  },
});
