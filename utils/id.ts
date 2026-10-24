/** Utility fungsi membuat ID unik menggunakan randomUUID expo-crypto. */

/* ATURAN: ID yang dihasilkan bersifat acak global, tidak perlu dicek duplikat
   terhadap existing habits karena randomUUID probabilitas collision-nya sangat kecil.
   ID lama di storage (format Date.now()-Math.random()) tetap diterima dan bisa dibaca. */

/* Keluaran: string - UUID v4 dari expo-crypto.randomUUID() */
import { randomUUID } from 'expo-crypto'

export function createId(): string {
  return randomUUID()
}