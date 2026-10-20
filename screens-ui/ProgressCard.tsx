// SEMENTARA (Dev C): ProgressCard versi layar sesuai kontrak components/ProgressCard
// (+opsional title/size agar bisa dipakai Home & halaman Progress).
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { CircularProgress } from './CircularProgress';
import { ProgressBar } from './ProgressBar';
import { colors, fonts, radius, shadow } from './theme';

interface ProgressCardProps {
  percent: number;
  done: number;
  total: number;
  title?: string;
  size?: 'default' | 'large';
  style?: StyleProp<ViewStyle>;
}

export const ProgressCard = ({
  percent,
  done,
  total,
  title = 'Progres Hari Ini',
  size = 'default',
  style,
}: ProgressCardProps) => {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));
  const summary =
    total > 0 ? `${done} dari ${total} kebiasaan selesai` : 'Belum ada kebiasaan';
  const isLarge = size === 'large';

  return (
    <View style={[styles.card, style]}>
      <View style={isLarge ? styles.rowLarge : styles.row}>
        <CircularProgress percent={clamped} size={isLarge ? 128 : 76} />
        <View style={isLarge ? styles.textsLarge : styles.texts}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.summary}>{summary}</Text>
        </View>
      </View>
      <ProgressBar percent={clamped} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    ...shadow.card,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rowLarge: {
    alignItems: 'center',
    marginBottom: 16,
  },
  texts: {
    flex: 1,
    marginLeft: 16,
  },
  textsLarge: {
    alignItems: 'center',
    marginTop: 12,
  },
  title: {
    fontFamily: fonts.semibold,
    fontSize: 16,
    color: colors.text,
  },
  summary: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
  },
});
