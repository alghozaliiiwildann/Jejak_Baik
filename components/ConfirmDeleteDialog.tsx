import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Trash } from 'lucide-react-native';
import { SecondaryButton } from './SecondaryButton';
import { colors, fonts, radius, shadow } from '../theme';

interface ConfirmDeleteDialogProps {
  visible: boolean;
  habitName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteDialog = ({
  visible,
  habitName,
  onConfirm,
  onCancel,
}: ConfirmDeleteDialogProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.backdrop}>
        <View style={styles.dialog} accessibilityViewIsModal>
          <View style={styles.iconBox}>
            <Trash size={26} color={colors.error} strokeWidth={2} />
          </View>
          <Text style={styles.title}>Hapus kebiasaan?</Text>
          <Text style={styles.description}>
            Kebiasaan "{habitName}" beserta riwayatnya akan dihapus. Tindakan ini
            tidak bisa dibatalkan.
          </Text>

          <View style={styles.actions}>
            <Pressable
              style={({ pressed }) => [styles.confirmButton, pressed && styles.pressed]}
              onPress={onConfirm}
              accessibilityRole="button"
              accessibilityLabel={`Hapus kebiasaan ${habitName}`}
            >
              <Trash size={18} color="#FFFFFF" />
              <Text style={styles.confirmText}>Hapus</Text>
            </Pressable>
            <View style={styles.gap} />
            <SecondaryButton label="Batal" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(31, 41, 55, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dialog: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: 20,
    ...shadow.card,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: radius.chip,
    backgroundColor: colors.errorSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontFamily: fonts.semibold,
    fontSize: 18,
    color: colors.text,
    marginBottom: 8,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 20,
  },
  actions: {
    marginTop: 4,
  },
  confirmButton: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: radius.button,
    backgroundColor: colors.error,
  },
  confirmText: {
    fontFamily: fonts.semibold,
    fontSize: 16,
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.85,
  },
  gap: {
    height: 12,
  },
});