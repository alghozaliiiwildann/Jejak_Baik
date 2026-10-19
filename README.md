# JejakBaik - Habit Tracker

Aplikasi pelacak kebiasaan mobile built dengan React Native, Expo, dan TypeScript.

## 📱 Fitur MVP

- Splash/Loading screen dengan identitas JejakBaik
- Halaman Home dengan progres harian dan daftar kebiasaan
- Halaman Tambah Kebiasaan
- Halaman Detail Kebiasaan
- Halaman Progress dengan grafik 7 hari terakhir
- Penyimpanan lokal dengan AsyncStorage
- Navigasi bottom tab (Home & Progress)

## 🚀 Cara Menjalankan

```bash
# Install dependensi
npm install

# Jalankan development server
npx expo start
```

- `npm run web` - Buka di browser
- `npm run android` - Jalankan di emulator Android
- `npm run ios` - Jalankan di emulator iOS (butuh macOS)

## 🌿 Aturan Branch

- `main` - Branch produksi, hanya merge dari `develop`
- `develop` - Branch development utama, fitur fitur di merge dari `feature/*`
- `feature/*` - Branch fitur, dibuat dari `develop`, lalu merge kembali ke `develop`
- Gunakan pesan commit yang deskriptif

## 📁 Struktur Folder per Peran

```
A = Setup & Data
  - app/_layout.tsx, app/index.tsx (splash)
  - app/(tabs)/_layout.tsx, app/(tabs)/index.tsx (Home)
  - app/(tabs)/progress.tsx
  - app/add.tsx, app/habit/[id].tsx, app/error.tsx
  - types/habit.ts
  - hooks/useHabits.ts, hooks/useProgress.ts
  - services/ (AsyncStorage wrapper)
  - context/ (jika dibutuhkan)
  - utils/date.ts (format tanggal)
  - utils/ (utility functions)

B = Design System & Komponen
  - components/PrimaryButton, SecondaryButton
  - components/HabitCard, ProgressBar, CircularProgress
  - components/CategoryChip, EmptyState, ErrorState
  - components/HabitIconPicker, ProgressCard, WeeklyBarChart
  - components/ConfirmDeleteDialog
  - theme/ (warna, typografi, radius)
  - assets/ (ikon, logo)

C = Layar & Integrasi
  - app/(tabs)/index.tsx (Home screen)
  - app/(tabs)/progress.tsx (Progress screen)
  - app/add.tsx (Add Habit screen)
  - app/habit/[id].tsx (Detail Habit screen)
  - app/error.tsx (Error Retry screen)
```

## 🎨 Token Desain

- **Primary**: `#16A34A` - tombol utama, progres
- **Secondary**: `#86EFAC` - aksen hijau muda
- **Text**: `#1F2937` - teks utama
- **Text Secondary**: `#6B7280` - teks bantuan
- **Background**: `#F3F4F6` - latar aplikasi
- **Card**: `#FFFFFF` - kartu dan panel
- **Border**: `#E5E7EB` - garis pembatas
- **Success**: `#15803D` - status selesai
- **Error**: `#EF4444` - pesan error
- **Soft Green**: `#DCFCE7` - latar ikon/kategori

## 📏 Radius & Padding

- Kartu: 14-18 px
- Tombol/Input: 10-12 px
- Padding layar: 16-20 px

## 📦 Dependencies utama

- `expo-router` - navigasi berbasis rute
- `@react-native-async-storage/async-storage` - penyimpanan lokal
- `expo-font` - font management
- `@expo-google-fonts/poppins` - font Poppins
- `lucide-react-native` - ikon
- `react-native-svg` - SVG support
- `react-native-safe-area-context` - safe area handling
