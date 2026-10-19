import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ErrorScreen({ navigation }: { navigation: any }) {
  const [error, setError] = React.useState<string | null>(null);
  const [retryCount, setRetryCount] = React.useState(0);

  const handleRetry = async () => {
    setRetryCount((prev) => prev + 1);
    // Trigger retry logic - in production would re-fetch data
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gagal memuat data</Text>
      <Text style={styles.message}>
        Terjadi kesalahan saat membaca data lokal. Silakan coba lagi.
      </Text>
      <Button title="Coba Lagi" onPress={handleRetry} />
      <Button title="Kembali ke Home" onPress={() => navigation.navigate('Home')} alternate />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 20,
    fontWeight: '700' as any,
    color: '#EF4444',
    marginBottom: 16,
  },
  message: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
    textAlign: 'center',
  },
});
