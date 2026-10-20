// SEMENTARA (Dev C): token desain milik Dev B (folder theme/) belum tersedia.
// Saat theme/ ada, ganti import screens-ui/theme -> theme dan hapus file ini.
export const colors = {
  primary: '#16A34A',
  secondary: '#86EFAC',
  text: '#1F2937',
  textSecondary: '#6B7280',
  background: '#F3F4F6',
  card: '#FFFFFF',
  border: '#E5E7EB',
  success: '#15803D',
  error: '#EF4444',
  errorSoft: '#FEE2E2',
  softGreen: '#DCFCE7',
  splashBackground: '#F0FDF4',
} as const;

// Nama fontFamily sesuai @expo-google-fonts/poppins.
// Dev A memuatnya di app/_layout.tsx; bila belum termuat, RN jatuh ke sans-serif sistem.
export const fonts = {
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  semibold: 'Poppins_600SemiBold',
  bold: 'Poppins_700Bold',
} as const;

export const radius = {
  card: 16,
  button: 12,
  input: 12,
  chip: 999,
} as const;

export const spacing = {
  screen: 20,
  section: 16,
  gap: 12,
} as const;

export const shadow = {
  card: {
    shadowColor: '#1F2937',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
} as const;

// Ukuran area sentuh minimal (PRD bagian 11: ~44x44)
export const HIT_SIZE = 44;
