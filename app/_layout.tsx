/**
 * Root layout JejakBaik (role Dev A — Setup & Data).
 * - Memuat font Poppins (fallback sans-serif bila gagal).
 * - Membungkus seluruh app dengan <HabitsProvider>.
 * - Mengonfigurasi Stack dasar: Home & Progress (tabs), add, habit/[id], error.
 */
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { HabitsProvider } from "../context/HabitsContext";

const COLORS = {
  background: "#F3F4F6",
  text: "#1F2937",
  border: "#E5E7EB",
  primary: "#16A34A",
} as const;

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  // Tunggu font; bila gagal, tetap lanjut dengan sans-serif fallback.
  if (!fontsLoaded && !fontError) return null;

  return (
    <HabitsProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.background },
          headerTintColor: COLORS.primary,
          headerTitleStyle: { color: COLORS.text, fontWeight: "700" },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: COLORS.background },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="add"
          options={{ title: "Tambah Kebiasaan", presentation: "modal" }}
        />
        <Stack.Screen
          name="habit/[id]"
          options={{ title: "Detail Kebiasaan" }}
        />
        <Stack.Screen name="error" options={{ headerShown: false }} />
      </Stack>
    </HabitsProvider>
  );
}
