import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface SecondaryButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

export const SecondaryButton = ({ label, onPress, disabled }: SecondaryButtonProps) => {
  return (
    <Pressable style={styles.button} disabled={disabled} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#86EFAC',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '600' as any,
  },
});
