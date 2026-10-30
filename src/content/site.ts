export const site = {
  name: "Royan",
  fullName: "Irsyad Miftahul Royan",
  role: "Junior full stack programmer",
  location: "Surabaya, Jawa Timur",
  email: "irsyadmr354@gmail.com",
  phone: "+62 857-4527-6656",
  whatsapp: "6285745276656",
  github: "https://github.com/Irsyadmr354",
  githubHandle: "Irsyadmr354",
  cvPdf: `${import.meta.env.BASE_URL}cv/irsyad-miftahul-royan-cv-en.pdf`,
  status: "Terbuka untuk posisi junior, magang, atau kontrak",
  school: "SMK 17 Agustus 1945 Surabaya, jurusan Rekayasa Perangkat Lunak",
  experience: [
    {
      role: "Full Stack Programmer (Intern / Project-Based)",
      place: "Surabaya, Indonesia",
      period: "2024 - sekarang",
      points: [
        "Membantu mengembangkan dan merawat aplikasi web dengan PHP, Laravel, HTML, CSS, dan JavaScript.",
        "Menerjemahkan desain UI menjadi layout front-end yang responsif.",
        "Menghubungkan logika back-end dengan database untuk fungsi inti sistem.",
        "Menelusuri bug dan memperbaiki performa sistem.",
        "Bekerja dengan anggota tim untuk memahami kebutuhan proyek dan menyelesaikan fitur tepat waktu.",
      ],
    },
    {
      role: "IT Support, Content Creator & Marketing (Internship)",
      place: "CV Rizki Barokah, Surabaya",
      period: "April 2025 - Oktober 2025",
      points: [
        "Memberi dukungan teknis harian, termasuk troubleshooting perangkat keras dan perangkat lunak.",
        "Membantu mengelola dan merawat sistem web internal.",
        "Membuat konten digital untuk kebutuhan promosi.",
        "Mendukung pemasaran melalui media sosial dan platform digital.",
        "Membantu merapikan alur kerja operasional dan teknis.",
      ],
    },
  ],
  intro:
    "Saya membangun aplikasi yang menyimpan uang, stok, dan kehadiran dengan benar. Bukan hanya layar yang terlihat selesai.",
  about: [
    "Lulusan SMK jurusan Rekayasa Perangkat Lunak di Surabaya. Saya belajar dengan membangun sistem utuh: absensi sekolah, toko online, kasir desktop, dan situs profil produk.",
    "Saya memakai asisten AI untuk menulis kode lebih cepat, lalu memeriksa hasilnya sendiri. Setiap perbaikan di portfolio ini punya jejak: masalah, perubahan, dan bukti test.",
  ],
  principles: [
    {
      title: "Uang dan stok tidak boleh setengah jadi",
      body: "Operasi yang mengubah dua tabel dijalankan dalam satu transaksi. Kalau satu langkah gagal, semuanya dibatalkan.",
    },
    {
      title: "Bukti lebih baik daripada klaim",
      body: "Halaman kerja menampilkan keluaran test dan potongan kode asli, bukan tangkapan layar palsu.",
    },
    {
      title: "AI mempercepat, manusia memutuskan",
      body: "Saya menulis prompt, memeriksa diff, dan menolak saran yang menambah kompleksitas tanpa manfaat.",
    },
  ],
} as const;
