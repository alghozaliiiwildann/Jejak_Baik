# PRD --- JejakBaik

**Versi:** 1.0\
**Platform:** Mobile (Android & iOS)\
**Teknologi utama:** React Native, Expo, TypeScript, Expo Router,
AsyncStorage\
**Bahasa antarmuka:** Bahasa Indonesia

------------------------------------------------------------------------

## 1. Ringkasan Produk

**JejakBaik** adalah aplikasi pelacak kebiasaan (*habit tracker*) yang
membantu pengguna membangun rutinitas positif, mencatat konsistensi, dan
melihat perkembangan dari waktu ke waktu.

Prinsip utama produk: **"Catat Kebiasaanmu, Lihat Perkembanganmu."**

Aplikasi harus mengikuti referensi desain yang diberikan: tampilan
bersih dengan latar putih kehijauan, aksen hijau, kartu bersudut
membulat, ikon sederhana, bayangan halus, tipografi Poppins, dan
navigasi bawah yang ringkas.

## 2. Tujuan Produk

1.  Membantu pengguna membuat dan mengelola kebiasaan harian.
2.  Membuat pencatatan kebiasaan bisa dilakukan dengan satu ketukan.
3.  Menampilkan progres harian dan ringkasan tujuh hari terakhir.
4.  Menyediakan pengalaman yang mudah dipahami, termasuk saat belum ada
    kebiasaan atau ketika data gagal dimuat.
5.  Menyimpan data secara lokal agar fitur inti dapat digunakan tanpa
    akun, backend, atau koneksi internet.

## 3. Target Pengguna

-   Pengguna yang ingin membangun rutinitas belajar, olahraga, membaca,
    minum air, meditasi, atau kebiasaan positif lainnya.
-   Pengguna pemula yang membutuhkan antarmuka sederhana.
-   Pengguna yang ingin melihat konsistensi tanpa fitur sosial atau
    sistem yang rumit.

## 4. Ruang Lingkup

### Termasuk dalam versi pertama (MVP)

-   Splash/loading screen dengan logo JejakBaik.
-   Beranda dengan sapaan, tanggal, progres harian, dan daftar
    kebiasaan.
-   Tambah kebiasaan.
-   Detail kebiasaan, checklist harian, riwayat, dan hapus kebiasaan.
-   Halaman progres dengan grafik tujuh hari dan statistik.
-   Empty state.
-   Error state dan tombol coba lagi.
-   Penyimpanan lokal menggunakan AsyncStorage.
-   Navigasi Home dan Progress.

### Tidak termasuk dalam MVP

-   Login/register dan akun pengguna.
-   Sinkronisasi cloud atau backend.
-   Fitur komunitas, pertemanan, atau leaderboard.
-   Notifikasi push terjadwal.
-   Integrasi kalender eksternal.
-   Analitik berbasis server.

## 5. Prinsip Desain dan Identitas Visual

### 5.1 Identitas merek

-   **Nama:** JejakBaik
-   **Tagline utama:** "Catat Kebiasaanmu, Lihat Perkembanganmu."
-   **Gaya logo:** simbol tunas/daun hijau minimalis di atas atau di
    samping teks JejakBaik.
-   Gunakan simbol dan wordmark secara konsisten pada splash screen dan
    empty state.
-   Jangan menggunakan kembali nama "SatuPersen" atau logo lamanya.

### 5.2 Palet warna

Gunakan warna berikut sebagai token desain. Jika warna pada gambar
terlihat sedikit berbeda akibat kompresi, utamakan token ini agar
implementasi konsisten.

  Token            Hex         Penggunaan
  ---------------- ----------- -----------------------------------
  Primary          `#16A34A`   Tombol utama, progres, ikon aktif
  Secondary        `#86EFAC`   Aksen hijau muda, highlight
  Text             `#1F2937`   Teks utama
  Text Secondary   `#6B7280`   Teks bantuan dan metadata
  Background       `#F3F4F6`   Latar belakang aplikasi
  Card             `#FFFFFF`   Kartu dan panel
  Border           `#E5E7EB`   Garis pembatas dan input
  Success          `#15803D`   Status selesai
  Error            `#EF4444`   Pesan error dan aksi berbahaya
  Soft Green       `#DCFCE7`   Latar ikon/kategori hijau

Warna kategori boleh menggunakan warna lembut yang berbeda, tetapi harus
tetap terbaca dan tidak mengalahkan warna utama.

### 5.3 Tipografi

-   **Font utama:** Poppins.
-   Judul halaman: Poppins SemiBold/Bold.
-   Judul kartu: Poppins Medium/SemiBold.
-   Isi: Poppins Regular.
-   Metadata: Poppins Regular dengan ukuran lebih kecil dan warna
    sekunder.
-   Jika Poppins tidak tersedia, gunakan fallback sans-serif yang
    bersih.
-   Hindari terlalu banyak ukuran font; gunakan hierarki konsisten.

### 5.4 Bentuk dan jarak

-   Kartu: radius sekitar 14--18 px.
-   Tombol: radius sekitar 10--12 px.
-   Input: radius sekitar 10--12 px.
-   Padding layar: sekitar 16--20 px.
-   Jarak antarbagian: sekitar 16--24 px.
-   Gunakan bayangan tipis dan lembut; hindari efek 3D atau gradien
    berlebihan.
-   Ikon harus sederhana, konsisten, dan mudah dikenali.
-   Layout harus responsif terhadap ukuran layar ponsel.

### 5.5 Logo

Logo berupa tiga bentuk daun/tunas sederhana dengan kombinasi hijau tua
dan hijau muda. Wordmark **JejakBaik** ditampilkan dengan bobot tebal.
Tagline berada di bawahnya. Logo tidak perlu meniru piksel secara
literal, tetapi proporsi, warna, dan kesan visualnya harus sedekat
mungkin dengan referensi.

## 6. Arsitektur dan Teknologi

-   React Native + Expo.
-   TypeScript untuk seluruh kode aplikasi.
-   Expo Router untuk navigasi berbasis rute.
-   AsyncStorage untuk penyimpanan data lokal.
-   Pustaka ikon yang konsisten, misalnya `lucide-react-native` atau
    ikon Expo yang sesuai.
-   Grafik progres dapat dibuat dengan pustaka grafik React Native yang
    stabil atau komponen bar sederhana buatan sendiri.
-   Tidak ada API, server, database online, atau autentikasi pada MVP.

### 6.1 Struktur data

Contoh model kebiasaan:

``` ts
type HabitCategory =
  | "Kesehatan"
  | "Produktivitas"
  | "Pendidikan"
  | "Hiburan"
  | "Self Care"
  | "Lainnya";

type Habit = {
  id: string;
  name: string;
  target?: string;
  category: HabitCategory;
  icon: string;
  createdAt: string; // ISO date
  completions: string[]; // daftar tanggal lokal YYYY-MM-DD
};
```

Data yang disimpan secara lokal minimal mencakup: - Daftar kebiasaan. -
Riwayat tanggal kebiasaan diselesaikan. - Preferensi sederhana jika
diperlukan.

Gunakan satu format tanggal lokal yang konsisten (`YYYY-MM-DD`) untuk
menghindari pencatatan ganda karena perbedaan waktu. Jangan menyimpan
hanya status "selesai hari ini" tanpa riwayat tanggal.

### 6.2 Perhitungan progres

-   Total kebiasaan = jumlah kebiasaan yang masih aktif.
-   Kebiasaan selesai hari ini = jumlah kebiasaan yang memiliki tanggal
    hari ini pada `completions`.
-   Persentase progres harian =
    `selesai hari ini / total kebiasaan × 100`.
-   Jika total kebiasaan 0, jangan membagi dengan nol; tampilkan empty
    state.
-   Rata-rata mingguan dihitung dari persentase penyelesaian per hari
    selama tujuh hari terakhir.
-   Grafik tujuh hari harus memakai data nyata dari penyimpanan lokal,
    bukan angka statis.
-   Perubahan tanggal harus diperhitungkan saat aplikasi dibuka kembali.

## 7. Struktur Navigasi

Navigasi utama menggunakan bottom tab:

1.  **Home** --- ikon rumah.
2.  **Progress** --- ikon grafik batang.

Rute sekunder: - Tambah Kebiasaan. - Detail Kebiasaan. - Error/Retry. -
Empty State ditampilkan di Home saat belum ada kebiasaan.

Alur utama: 1. Aplikasi dibuka. 2. Splash/loading membaca data dari
AsyncStorage. 3. Jika data berhasil dibaca, tampilkan Home. 4. Jika data
kosong, tampilkan Home dengan empty state. 5. Dari Home, pengguna bisa
menandai kebiasaan selesai, membuka detail, atau menambah kebiasaan. 6.
Dari bottom tab, pengguna membuka Progress. 7. Jika pemuatan data gagal,
tampilkan Error State dan opsi coba lagi atau kembali ke Home.

## 8. Spesifikasi Layar

### 8.1 Splash / Loading Screen

**Tujuan:** Menampilkan identitas JejakBaik sambil membaca data lokal.

**Elemen:** - Latar putih kehijauan. - Logo daun JejakBaik di tengah. -
Wordmark "JejakBaik". - Tagline "Catat Kebiasaanmu, Lihat
Perkembanganmu." - Indikator loading kecil berwarna hijau. - Teks status
"Memuat data...". - Dekorasi daun transparan di sudut bawah, seperti
referensi.

**Perilaku:** - Baca data dari AsyncStorage. - Setelah berhasil, arahkan
ke Home. - Jika tidak ada data, arahkan ke Home dan tampilkan empty
state. - Jika pembacaan gagal, tampilkan Error State. - Jangan biarkan
loading berlangsung tanpa batas; tangani error dengan jelas.

### 8.2 Home Page

**Tujuan:** Menjadi pusat aktivitas harian pengguna.

**Header:** - Sapaan, misalnya "Hai, Arief 👋". - Subteks "Selamat
pagi!". - Tanggal dalam bahasa Indonesia. - Ikon lonceng di kanan atas.
Jika notifikasi belum tersedia, ikon boleh bersifat dekoratif dan tidak
boleh menjanjikan fitur aktif.

**Kartu Progres Hari Ini:** - Lingkaran progres dengan angka persentase,
misalnya `60%`. - Judul "Progres Hari Ini". - Ringkasan, misalnya "3
dari 5 kebiasaan selesai". - Progress bar hijau.

**Daftar Kebiasaan:** - Judul "Daftar Kebiasaan". - Tautan "Lihat Semua"
jika daftar dibatasi. - Setiap baris/kartu berisi: - Ikon kebiasaan. -
Nama kebiasaan. - Target singkat, bila ada. - Checkbox/status selesai di
sisi kanan. - Contoh data tampilan awal pada referensi: - Minum air
putih --- Target: 8 gelas. - Olahraga --- Target: 30 menit. - Baca buku
--- Target: 30 menit. - Belajar coding --- Target: 1 jam. - Meditasi ---
Target: 10 menit. - Contoh tersebut dapat digunakan sebagai data demo
awal hanya jika aplikasi memang memerlukan onboarding/demo. Jangan
menambahkannya diam-diam ke pengguna yang memilih mulai kosong.

**Aksi:** - Menekan checkbox menandai atau membatalkan penyelesaian
kebiasaan untuk hari ini. - Menekan kartu membuka Detail Kebiasaan. -
Tombol bulat `+` membuka Tambah Kebiasaan. - Bottom tab Home dan
Progress selalu terlihat pada layar utama.

**Empty state:** - Jika belum ada kebiasaan, tampilkan ilustrasi tunas,
teks "Belum ada kebiasaan", penjelasan singkat, dan tombol "Tambah
Kebiasaan". - Jangan menampilkan daftar kosong tanpa penjelasan.

### 8.3 Add Habit Page --- Tambah Kebiasaan

**Tujuan:** Memungkinkan pengguna membuat kebiasaan baru dengan cepat.

**Elemen:** - Tombol kembali. - Judul "Tambah Kebiasaan". - Input wajib
"Nama Kebiasaan \*". - Placeholder: "Contoh: Minum air putih" - Input
opsional "Target (opsional)". - Placeholder: "Contoh: 8 gelas / 30
menit" - Pilihan "Kategori" dengan dropdown. - Bagian "Pilih Ikon
(opsional)" berupa grid pilihan ikon. - Tombol utama hijau "Simpan". -
Tombol sekunder "Kembali".

**Kategori yang tersedia:** - Kesehatan. - Produktivitas. -
Pendidikan. - Hiburan. - Self Care. - Lainnya.

**Pilihan ikon:** - Air/minum. - Olahraga. - Buku. - Kode/programming. -
Meditasi/tanaman. - Hati. - Wajah senyum. - Bintang. - Ikon lainnya bila
sesuai.

**Validasi:** - Nama wajib diisi. - Trim spasi di awal dan akhir nama. -
Tolak nama kosong. - Berikan pesan validasi dekat input, bukan hanya
alert umum. - Target boleh kosong. - Kategori harus memiliki nilai
default yang jelas atau wajib dipilih secara konsisten. - Tombol Simpan
tidak boleh membuat entri ganda saat ditekan berulang kali.

**Setelah menyimpan:** - Simpan kebiasaan ke AsyncStorage. - Kembali ke
Home. - Kebiasaan baru muncul pada daftar. - Berikan feedback singkat
bahwa kebiasaan berhasil ditambahkan.

### 8.4 Progress Page

**Tujuan:** Membantu pengguna memahami konsistensi dan kemajuan.

**Header:** - Judul "Progress". - Ikon kalender di kanan atas. Jika
belum ada pemilih tanggal, jangan tampilkan sebagai kontrol yang seolah
berfungsi.

**Kartu Penyelesaian Hari Ini:** - Lingkaran progres besar. - Contoh:
`60%`. - Label "Penyelesaian Hari Ini". - Ringkasan "3 dari 5
kebiasaan". - Progress bar.

**Ringkasan 7 Hari Terakhir:** - Judul "Ringkasan 7 Hari Terakhir". -
Grafik batang tujuh hari. - Setiap batang menunjukkan persentase
penyelesaian untuk tanggal terkait. - Label hari dan tanggal di bawah
batang. - Persentase di atas batang. - Gunakan data lokal aktual; contoh
40%, 60%, 80%, 60%, 40%, 80%, 60% pada gambar hanya ilustrasi.

**Statistik:** - Total Kebiasaan. - Selesai Hari Ini. - Rata-rata Minggu
Ini.

**Aturan:** - Statistik diperbarui setelah kebiasaan ditandai selesai
atau dibatalkan. - Saat belum ada kebiasaan, tampilkan empty state yang
relevan, bukan grafik palsu. - Pastikan label grafik terbaca di layar
kecil.

### 8.5 Detail Habit Page --- Detail Kebiasaan

**Tujuan:** Menampilkan detail dan riwayat satu kebiasaan.

**Elemen:** - Tombol kembali. - Ikon dan nama kebiasaan, misalnya "Minum
air putih". - Target, misalnya "Target: 8 gelas". - Chip kategori,
misalnya "Kesehatan". - Tombol utama "Selesai hari ini" dengan ikon
checkbox. - Tanggal hari ini. - Bagian "Riwayat" berupa deretan tanggal
atau kalender mini dengan indikator hari selesai. - Tombol berbahaya
"Hapus Kebiasaan" dengan latar merah muda lembut.

**Perilaku:** - Tombol selesai menambah tanggal hari ini ke
`completions`. - Jika sudah selesai, tombol menunjukkan status selesai
dan dapat digunakan untuk membatalkan. - Riwayat menunjukkan tanggal
yang benar-benar tersimpan. - Hapus kebiasaan memerlukan dialog
konfirmasi. - Setelah dihapus, kembali ke Home dan perbarui statistik. -
Jangan menghapus kebiasaan akibat satu ketukan yang tidak disengaja.

### 8.6 Error / Retry State

**Tujuan:** Menjelaskan kegagalan pemuatan data dan memberi jalan
pemulihan.

**Elemen:** - Ikon peringatan merah lembut. - Judul "Gagal memuat
data". - Teks: "Terjadi kesalahan saat membaca data lokal. Silakan coba
lagi." - Tombol utama "Coba Lagi". - Tautan/tombol sekunder "Kembali ke
Home".

**Perilaku:** - Tombol Coba Lagi mengulang proses baca data. - Jangan
menghapus atau menimpa data lokal saat proses retry. - Jika retry gagal,
tetap tampilkan pesan yang jelas. - Hindari menampilkan stack trace atau
detail teknis mentah kepada pengguna.

### 8.7 Komponen UI

Komponen berikut harus dibuat reusable agar tampilan konsisten:

-   `PrimaryButton`
-   `SecondaryButton`
-   `HabitCard`
-   `ProgressCard`
-   `CircularProgress`
-   `ProgressBar`
-   `CategoryChip`
-   `HabitIconPicker`
-   `EmptyState`
-   `ErrorState`
-   `BottomTabBar`
-   `ConfirmDeleteDialog`

**Primary Button:** - Hijau utama, teks putih, radius membulat. - Tinggi
sentuh nyaman. - Memiliki state normal, pressed, dan disabled.

**Secondary Button:** - Latar putih, border abu-abu/hijau tipis, teks
gelap.

**Habit Card:** - Latar putih, sudut membulat, ikon pada wadah berwarna
lembut. - Nama dan target di bagian tengah. - Checkbox di kanan.

**Progress Card:** - Latar putih, lingkaran persentase, teks ringkasan,
dan progress bar.

**Category Chip:** - Bentuk pil dengan latar pastel. - Contoh label:
Kesehatan, Produktivitas, Pendidikan, Hiburan, Self Care, Lainnya.

## 9. Interaksi dan Aturan Fungsional

1.  Semua tombol yang tampak interaktif harus benar-benar berfungsi.
2.  Status selesai harus tetap tersimpan setelah aplikasi ditutup dan
    dibuka kembali.
3.  Menandai selesai dua kali tidak boleh membuat duplikasi tanggal.
4.  Pembatalan selesai harus menghapus tanggal hari ini dari riwayat
    kebiasaan.
5.  Semua perubahan harus memperbarui Home dan Progress secara
    konsisten.
6.  Perhitungan persentase harus aman untuk daftar kosong.
7.  Jika pengguna mengubah tanggal perangkat, aplikasi harus menghitung
    status berdasarkan tanggal lokal saat ini.
8.  Tombol kembali harus mempertahankan alur navigasi yang masuk akal.
9.  Gunakan loading state saat operasi penyimpanan bila diperlukan.
10. Semua kontrol harus memiliki area sentuh yang cukup dan label yang
    dapat dipahami.

## 10. Penyimpanan Lokal dan Penanganan Data

-   Gunakan AsyncStorage untuk menyimpan daftar kebiasaan dan riwayat
    penyelesaian.
-   Bungkus operasi baca/tulis dalam fungsi service terpisah.
-   Tangani JSON yang rusak atau format data versi lama secara aman.
-   Jangan menghapus semua data sebagai solusi otomatis ketika pembacaan
    gagal.
-   Pertimbangkan versioning sederhana untuk struktur penyimpanan.
-   Sediakan fallback/error state jika operasi lokal gagal.
-   Jelaskan di dokumentasi aplikasi bahwa data MVP disimpan pada
    perangkat yang sama dan belum disinkronkan ke cloud.

Contoh kunci penyimpanan: - `jejakbaik.habits.v1`

## 11. Aksesibilitas dan Responsivitas

-   Kontras teks dan latar harus cukup.
-   Jangan menggunakan warna saja untuk menandakan selesai; sertakan
    checkbox/ikon.
-   Ukuran sentuh tombol dan ikon penting idealnya sekitar 44 × 44 pt.
-   Input mempunyai label yang jelas.
-   Ikon dekoratif tidak boleh mengganggu pembaca layar.
-   Pastikan layout tidak terpotong pada perangkat kecil.
-   Perhatikan safe area, status bar, dan bottom navigation.
-   Dukungan ukuran teks sistem sejauh tidak merusak layout.

## 12. Kriteria Penerimaan

### Splash dan navigasi

-   [ ] Logo dan nama JejakBaik tampil benar.
-   [ ] Loading membaca data lokal dan tidak macet tanpa batas.
-   [ ] Home dan Progress bisa dibuka melalui bottom tab.

### Home

-   [ ] Sapaan dan tanggal tampil.
-   [ ] Progres harian sesuai jumlah kebiasaan yang selesai.
-   [ ] Setiap kebiasaan menampilkan ikon, nama, target, dan status.
-   [ ] Tombol `+` membuka formulir tambah kebiasaan.
-   [ ] Empty state tampil jika daftar kebiasaan kosong.

### Tambah kebiasaan

-   [ ] Nama wajib divalidasi.
-   [ ] Target bersifat opsional.
-   [ ] Kategori dan ikon dapat dipilih.
-   [ ] Simpan menambahkan data secara lokal dan menampilkan kebiasaan
    baru.

### Detail kebiasaan

-   [ ] Pengguna dapat menyelesaikan dan membatalkan kebiasaan.
-   [ ] Riwayat menampilkan tanggal yang benar.
-   [ ] Hapus memerlukan konfirmasi.

### Progress

-   [ ] Grafik menampilkan tujuh hari terakhir berdasarkan data aktual.
-   [ ] Total kebiasaan, penyelesaian hari ini, dan rata-rata mingguan
    benar.
-   [ ] Grafik dan statistik diperbarui setelah perubahan data.

### Error dan penyimpanan

-   [ ] Error state menyediakan Coba Lagi.
-   [ ] Data tidak hilang hanya karena retry gagal.
-   [ ] Data tetap tersedia setelah aplikasi ditutup dan dibuka kembali.

### Visual

-   [ ] Palet hijau dan latar putih kehijauan konsisten.
-   [ ] Tipografi Poppins atau fallback sejenis digunakan konsisten.
-   [ ] Kartu, tombol, input, dan chip memiliki radius serta jarak yang
    konsisten.
-   [ ] Tidak ada teks placeholder yang terpotong atau elemen keluar
    layar.
-   [ ] Tidak ada tombol dekoratif yang tampak aktif tetapi tidak
    melakukan apa-apa.

## 13. Panduan Implementasi untuk Menjaga Kemiripan dengan Referensi

1.  Jadikan gambar referensi sebagai acuan visual utama, bukan inspirasi
    umum.
2.  Bangun layar satu per satu sesuai urutan: Splash, Home, Tambah
    Kebiasaan, Progress, Detail, Error, Empty State.
3.  Samakan hierarki visual, penempatan elemen, padding, ukuran kartu,
    warna, dan bentuk tombol sebelum menambahkan animasi.
4.  Gunakan data contoh hanya untuk preview/development. Data grafik
    produksi harus dihitung dari riwayat lokal.
5.  Gunakan ikon yang paling dekat dengan gambar dan pertahankan gaya
    garis/solid secara konsisten.
6.  Uji pada beberapa ukuran ponsel; jangan memaksakan seluruh layar
    referensi menjadi satu halaman panjang.
7.  Jangan menambahkan fitur atau elemen visual baru yang mengubah
    komposisi tanpa kebutuhan fungsional.
8.  Bandingkan screenshot setiap layar dengan referensi setelah
    implementasi dan perbaiki perbedaan secara iteratif.

**Catatan realistis:** PRD ini menetapkan struktur, konten, perilaku,
dan gaya visual sedekat mungkin dengan gambar. Hasil yang benar-benar
identik hingga tingkat piksel masih bergantung pada aset logo/ikon
final, font yang tersedia, dimensi perangkat, serta implementasi
komponen dan layout.
