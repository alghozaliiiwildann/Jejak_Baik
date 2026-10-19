import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useHabits } from '../hooks/useHabits';

export default function AddHabitScreen() {
  const { addHabit } = useHabits();
  const [name, setName] = React.useState('');
  const [target, setTarget] = React.useState('');
  const [category, setCategory] = React.useState<'Kesehatan' | 'Produktivitas' | 'Pendidikan' | 'Hiburan' | 'Self Care' | 'Lainnya'>('Kesehatan');
  const [icon, setIcon] = React.useState('droplet');

  const categories = [
    { value: 'Kesehatan', label: 'Kesehatan' },
    { value: 'Produktivitas', label: 'Produktivitas' },
    { value: 'Pendidikan', label: 'Pendidikan' },
    { value: 'Hiburan', label: 'Hiburan' },
    { value: 'Self Care', label: 'Self Care' },
    { value: 'Lainnya', label: 'Lainnya' },
  ];

  const icons = ['droplet', 'dumbbell', 'book-open', 'code', 'leaf', 'heart'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Kebiasaan</Text>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nama kebiasaan *"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Target (opsional)"
          value={target}
          onChangeText={setTarget}
          style={styles.input}
        />
      </View>

      <View style={styles.categoryPicker}>
        <Text style={styles.categoryLabel}>Kategori</Text>
        {/* CategoryChip placeholder */}
      </View>

      <View style={styles.iconPicker}>
        <Text style={styles.iconLabel}>Ikon</Text>
        {/* HabitIconPicker placeholder */}
      </View>

      <Pressable style={styles.saveButton} onPress={() => addHabit({ name, target, category, icon })}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => {}}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </Pressable>
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
  inputGroup: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
  },
  categoryPicker: {
    marginBottom: 16,
  },
  categoryLabel: {
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 8,
  },
  iconPicker: {
    marginBottom: 24,
  },
  iconLabel: {
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 8,
  },
  saveButton: {
    backgroundColor: '#16A34A',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600' as any,
  },
  backButton: {
    alignItems: 'center',
  },
  backButtonText: {
    color: '#6B7280',
    fontSize: 14,
  },
});
