# DESIGN.md

Arah desain untuk portfolio Royan. Dokumen ini ditulis oleh agen berdasarkan pekerjaan nyata di repositori, bukan template. Setiap keputusan punya alasan satu baris.

## Identitas

Portfolio ini dibaca seperti buku kas dan struk: kertas, garis, angka tabular, dan satu cap tinta merah. Alasannya, pekerjaan yang ditampilkan berputar di transaksi, stok, absensi, dan uang, jadi metafora buku kas berasal dari isi, bukan dari tren visual.

- Nama tampil: Royan
- Peran: junior software engineer
- Lokasi: Surabaya
- Nada: tenang, langsung, tanpa klaim berlebihan

## Dials

ENERGY 3 / RHYTHM 3 / MOTION 1

- ENERGY 3: judul besar dan cap status, karena portfolio ini harus terasa hadir dalam satu layar.
- RHYTHM 3: bagian disusun berbeda, baris ledger, kolom ganda, dan catatan margin, agar tidak terasa seperti template.
- MOTION 1: hanya transisi hover dan perubahan fokus. Isi yang bergerak sendiri mengalihkan perhatian dari bukti.

## Palet

- Kertas `#f4f0e6`, kertas gelap `#eae4d6`
- Tinta `#16150f`, tinta lembut `#5c5748`
- Aksen cap `#b23a2e`

Alasan: dua warna netral plus satu aksen merah tinta. Merah dipakai hanya untuk cap status dan penanda kecil, bukan untuk seluruh antarmuka.

Tema tunggal kertas, tanpa toggle gelap. Alasan: situs ini dibaca seperti dokumen cetak, bukan alat developer, dan kertas adalah bagian dari identitasnya.

## Tipografi

- Fraunces untuk judul. Alasan: serif dengan karakter cetak, cocok dengan metafora buku kas.
- IBM Plex Sans untuk teks isi. Alasan: dibuat untuk dokumentasi teknis, netral dan mudah dibaca.
- IBM Plex Mono untuk angka, indeks, dan kode. Alasan: angka harus rata kolom.

## Komposisi

- Garis horizontal memisahkan entri, seperti buku besar.
- Setiap proyek diberi nomor urut 01, 02, dan seterusnya, konsisten di beranda dan halaman kerja.
- Halaman studi kasus memakai kolom meta di kiri dan isi di kanan pada layar lebar.
- Cap status muncul satu kali di beranda, bukan di setiap bagian.

## Yang sengaja tidak dipakai

- Gradient biru ungu, glow, glassmorphism, dan blob.
- Kartu fitur identik dan grid bento.
- Testimoni atau angka pengguna yang tidak bisa diverifikasi.
- Screenshot palsu. Bukti yang ditampilkan berupa keluaran test dan potongan kode asli.
- Animasi scroll yang sama untuk semua elemen.

## Batasan

- Foto profil belum ada, jadi identitas dibangun dari tipografi dan cap, bukan avatar.
- Dua proyek masih privat, jadi tidak ada tautan repo untuk keduanya. Halaman menyebutkannya apa adanya.
