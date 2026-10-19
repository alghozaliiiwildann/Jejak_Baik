import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const PrimaryButton = ({ label, onPress, disabled, loading }: PrimaryButtonProps) => {
  return (
    <Pressable style={styles.button} disabled={disabled} onPress={onPress}>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <Text style={styles.buttonText}>{label}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#16A34A',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600' as any,
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
