import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as AsyncStorageProvider } from 'react-native-async-storage';
import { Router } from 'expo-router';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Router>
        {/* Routes are defined in expo-router config */}
      </Router>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
});
