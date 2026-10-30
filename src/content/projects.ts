export type Evidence =
  | { kind: "code"; title: string; body: string; note?: string }
  | { kind: "test"; title: string; body: string; note?: string }
  | { kind: "note"; title: string; body: string };

export type Project = {
  slug: string;
  index: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  stack: string[];
  repo: string | null;
  repoLabel: string;
  accessNote: string | null;
  highlights: { label: string; value: string }[];
  problem: string[];
  changes: { title: string; body: string }[];
  evidence: Evidence[];
  limits: string[];
};

export const projects: Project[] = [
  {
    slug: "codeai",
    index: "01",
    title: "CodeAI",
    kind: "Tooling AI, CLI",
    year: "2026",
    summary:
      "Harness CLI Python yang menyatukan beberapa provider model dalam satu REPL, dengan kepatuhan AGENTS.md, lifecycle hooks, dan kompresi konteks.",
    stack: ["Python", "CLI", "Multi-provider", "Lifecycle hooks"],
    repo: "https://github.com/Irsyadmr354/CodeAI",
    repoLabel: "Lihat repo CodeAI",
    accessNote: null,
    highlights: [
      { label: "Bahasa", value: "Python" },
      { label: "Provider", value: "7 gateway" },
      { label: "Fokus", value: "Kepatuhan aturan" },
    ],
    problem: [
      "Asisten kode dari beberapa provider punya cara berbeda dalam membaca aturan proyek. Hasilnya, instruksi penting di AGENTS.md sering terlewat.",
      "Percakapan panjang juga menaikkan biaya token, sementara memotong konteks sembarangan membuat model lupa keputusan sebelumnya.",
    ],
    changes: [
      {
        title: "Urutan aturan yang jelas",
        body: "Precedence aturan dibuat eksplisit: Base, System, Global, AGENTS, HOOKS, lalu User. Hook hanya bisa menambah, tidak menimpa aturan dasar.",
      },
      {
        title: "Hook siklus hidup",
        body: "Dispatcher menangani SessionInit, Pre Tool, Post Tool, PreCompact, dan SessionEnd. Setiap tahap punya tempat tetap, bukan tersebar di kode.",
      },
      {
        title: "Kompresi konteks",
        body: "Ringkasan dibatasi sepuluh baris, ditambah skeleton AST dan fact card yang bergeser. Konteks mengecil tanpa membuang keputusan.",
      },
      {
        title: "Failover provider",
        body: "Urutan failover bisa diatur di codeai.json, termasuk gateway OpenAI-compatible dengan penemuan model dari /v1/models.",
      },
    ],
    evidence: [
      {
        kind: "code",
        title: "codeai.json",
        body: `{
  "provider": {
    "default": "anthropic",
    "effort": "medium",
    "failover_order": ["copilot", "gemini", "openai", "ollama"]
  },
  "compaction": { "token_budget": 4000 },
  "custom_providers": {},
  "allowance": { "mode": "ask" }
}`,
        note: "Konfigurasi nyata dari README repo.",
      },
      {
        kind: "note",
        title: "Struktur repo",
        body: "main.py, paket codeai/, folder harness/, docs audit, dan tests/ tersedia publik di GitHub.",
      },
    ],
    limits: [
      "Belum ada paket rilis dengan instalasi satu perintah.",
      "Perilaku tiap provider bergantung pada API masing-masing, jadi failover tidak selalu identik.",
    ],
  },
  {
    slug: "absensi-qr",
    index: "02",
    title: "SI Absensi Guru dan Karyawan",
    kind: "Aplikasi web, Laravel",
    year: "2026",
    summary:
      "Absensi sekolah dengan QR sekali pakai. Token terikat ke akun, jam masuk dan pulang divalidasi, keterlambatan dihitung otomatis.",
    stack: ["Laravel 12", "MySQL", "Blade", "Tailwind", "PHPUnit"],
    repo: "https://github.com/Irsyadmr354/SI_ABSENSI_GURU_DAN_KARYAWAN",
    repoLabel: "Lihat repo absensi",
    accessNote: null,
    highlights: [
      { label: "Test", value: "10 lulus" },
      { label: "Alur QR", value: "6 test" },
      { label: "Role", value: "3 tingkat" },
    ],
    problem: [
      "Absensi manual bisa diwakilkan. Satu orang dapat mencatat kehadiran rekan kerjanya tanpa ketahuan.",
      "Keterlambatan juga sering dicatat sebagai angka manual, sehingga rawan salah hitung dan sulit diaudit.",
    ],
    changes: [
      {
        title: "Token satu kali pakai",
        body: "Token QR disimpan di cache dan dihapus setelah dipakai. Token juga menyimpan user_id, dan pemindai harus login sebagai pemiliknya.",
      },
      {
        title: "Validasi jendela waktu",
        body: "Check-in dibuka dua jam sebelum shift. Scan ditutup dua jam setelah jam pulang. Di luar itu, sistem menolak dengan pesan yang jelas.",
      },
      {
        title: "Perbaikan hitung terlambat",
        body: "Carbon 3 mengembalikan selisih bertanda. Kode lama menghasilkan angka negatif sehingga keterlambatan tidak pernah tercatat. Test menemukan ini, lalu perhitungan dibalik dan dikunci dengan test.",
      },
      {
        title: "Route dan test dibersihkan",
        body: "Dua route scan yang menunjuk method tidak ada dihapus. Test bawaan diganti test alur nyata dan redirect per role.",
      },
    ],
    evidence: [
      {
        kind: "code",
        title: "Perbaikan menit terlambat",
        body: `- $terlambat = $now->diffInMinutes($jamMasukWithTolerance->subMinutes($jamKerja->toleransi_keterlambatan));
+ $terlambat = (int) $jamMasuk->diffInMinutes($now);`,
        note: "Diff nyata di app/Http/Controllers/AbsensiScanController.php.",
      },
      {
        kind: "test",
        title: "php artisan test",
        body: `PASS  Tests\\Feature\\AbsensiScanTest
  ✓ check in on time records attendance
  ✓ late check in records minutes late
  ✓ second scan checks out
  ✓ token can only be used once
  ✓ token belongs to another user is rejected
  ✓ scan before window is rejected

PASS  Tests\\Feature\\HomeRedirectTest
  ✓ guest is redirected to login
  ✓ admin is redirected to admin dashboard
  ✓ guru is redirected to guru dashboard
  ✓ karyawan is redirected to karyawan dashboard

Tests:    10 passed (28 assertions)`,
        note: "Dijalankan di mesin lokal pada 30 Oktober 2026.",
      },
    ],
    limits: [
      "Reset absensi demo dinonaktifkan di production, tetapi belum ada audit log terpisah untuk aksi admin.",
      "Belum ada notifikasi WhatsApp atau email untuk keterlambatan.",
    ],
  },
  {
    slug: "luxiva-checkout",
    index: "03",
    title: "SI Toko Luxiva",
    kind: "E-commerce, Next.js",
    year: "2026",
    summary:
      "Toko online dengan katalog, keranjang, checkout, pembayaran Xendit, dan dashboard admin. Checkout memakai transaksi database dan validasi stok.",
    stack: ["Next.js 16", "React 19", "Prisma", "MySQL", "Xendit"],
    repo: null,
    repoLabel: "Repo privat",
    accessNote: "Kode dapat ditunjukkan saat wawancara.",
    highlights: [
      { label: "API route", value: "34" },
      { label: "Database", value: "Prisma" },
      { label: "Perbaikan", value: "Transaksi checkout" },
    ],
    problem: [
      "Checkout lama menghitung total sebagai angka pecahan di JavaScript, menyimpan order, mengosongkan keranjang, dan menulis log dalam tiga panggilan terpisah.",
      "Stok tidak divalidasi dan tidak dikurangi. Dua pembeli terakhir bisa membeli barang yang sama, dan order bisa tersimpan setengah jadi saat satu langkah gagal.",
    ],
    changes: [
      {
        title: "Satu transaksi untuk seluruh checkout",
        body: "Ambil keranjang, validasi stok, potong stok, buat order, kosongkan keranjang, dan tulis log di dalam prisma.$transaction. Gagal di satu langkah berarti rollback.",
      },
      {
        title: "Potong stok bersyarat",
        body: "Update memakai syarat stock >= quantity. Kalau stok berubah di antara baca dan tulis, update gagal dan checkout dibatalkan dengan pesan yang jelas.",
      },
      {
        title: "Total memakai Decimal",
        body: "Total dihitung dengan Prisma.Decimal, bukan Number, agar tidak ada selisih pembulatan pada nilai uang.",
      },
    ],
    evidence: [
      {
        kind: "code",
        title: "Inti checkout",
        body: `const order = await prisma.$transaction(async (tx) => {
  const cartItems = await tx.cart.findMany({
    where: { userId: session.user.id },
    include: { product: true },
  });

  for (const item of orderItems) {
    const updated = await tx.product.updateMany({
      where: { id: item.productId, stock: { gte: item.quantity } },
      data: { stock: { decrement: item.quantity } },
    });

    if (updated.count !== 1) {
      throw new CheckoutError(409, "Stok produk berubah saat checkout");
    }
  }
});`,
        note: "Disederhanakan dari app/api/orders/route.js.",
      },
      {
        kind: "note",
        title: "Yang berubah",
        body: "Sebelumnya order, hapus keranjang, dan activity log berjalan terpisah tanpa transaksi, dan stok tidak pernah dipotong.",
      },
    ],
    limits: [
      "Belum ada test otomatis untuk API dan checkout.",
      "Rekonsiliasi pembayaran Xendit masih bergantung pada webhook dan pengecekan manual.",
    ],
  },
  {
    slug: "kasirnano",
    index: "04",
    title: "KasirNano",
    kind: "Aplikasi desktop, Java",
    year: "2026",
    summary:
      "Kasir desktop untuk warung dengan SQLite. Penjualan dan pemotongan stok sekarang berada dalam satu transaksi.",
    stack: ["Java 21", "Swing", "FlatLaf", "SQLite"],
    repo: null,
    repoLabel: "Repo privat",
    accessNote: "Kode dapat ditunjukkan saat wawancara.",
    highlights: [
      { label: "Berkas Java", value: "20" },
      { label: "Database", value: "SQLite lokal" },
      { label: "Perbaikan", value: "Stok atomik" },
    ],
    problem: [
      "Setelah transaksi tersimpan, aplikasi memotong stok satu per satu dan mengabaikan hasilnya. Kalau stok tidak cukup, penjualan tetap tercatat.",
      "Folder build target/ ikut masuk ke git, dan tidak ada README yang menjelaskan cara menjalankan aplikasi.",
    ],
    changes: [
      {
        title: "Transaksi database",
        body: "TransaksiService membuka satu koneksi, mematikan autocommit, menyimpan penjualan, lalu memotong stok dengan syarat stok cukup. Kegagalan memicu rollback.",
      },
      {
        title: "Repo dibersihkan",
        body: "target/ dikeluarkan dari index git, file kosong bernama git dihapus, dan README ditulis ulang.",
      },
    ],
    evidence: [
      {
        kind: "code",
        title: "Alur transaksi",
        body: `conn.setAutoCommit(false);
if (!transaksiDAO.insert(transaksi, conn)) {
  conn.rollback();
  return false;
}
for (Map.Entry<Produk, Integer> entry : keranjang.entrySet()) {
  if (!produkDAO.updateStok(entry.getKey().getId(), entry.getValue(), conn)) {
    conn.rollback();
    return false;
  }
}
conn.commit();`,
        note: "Disederhanakan dari TransaksiService.java.",
      },
    ],
    limits: [
      "Nilai uang masih double. Untuk produksi sebaiknya BigDecimal atau satuan rupiah terkecil.",
      "Belum ada test otomatis. Verifikasi dilakukan dengan kompilasi javac dan smoke test manual: penjualan melebihi stok ditolak, penjualan valid memotong stok.",
    ],
  },
  {
    slug: "madu",
    index: "05",
    title: "Madu Asli Indonesia",
    kind: "Situs profil, Next.js",
    year: "2026",
    summary:
      "Situs produk madu dengan artikel di MySQL dan panel admin. Panel admin sebelumnya terbuka, sekarang memakai sesi bertanda tangan.",
    stack: ["Next.js 15", "React 19", "MySQL", "Tailwind"],
    repo: null,
    repoLabel: "Repo privat",
    accessNote: "Kode dapat ditunjukkan saat wawancara.",
    highlights: [
      { label: "Celah ditutup", value: "3" },
      { label: "API tulis", value: "Butuh sesi" },
      { label: "Cookie", value: "HMAC httpOnly" },
    ],
    problem: [
      "Endpoint tulis artikel bisa dipanggil tanpa login. Panel /admin juga tidak dilindungi.",
      "Endpoint kunci situs memakai kunci yang ditulis langsung di kode, sehingga siapa pun yang membaca repo bisa mengubah status situs.",
    ],
    changes: [
      {
        title: "Sesi admin",
        body: "Login memverifikasi ADMIN_PASSWORD dengan perbandingan waktu konstan, lalu menyimpan token HMAC di cookie httpOnly. Middleware melindungi seluruh /admin.",
      },
      {
        title: "Guard di API tulis",
        body: "POST, PUT, dan DELETE pada artikel menolak permintaan tanpa cookie admin yang valid.",
      },
      {
        title: "Kunci dev dari environment",
        body: "Endpoint kunci situs mati jika DEV_LOCK_KEY kosong atau aplikasi berjalan di production.",
      },
    ],
    evidence: [
      {
        kind: "code",
        title: "Guard API",
        body: `export async function POST(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // ...
}`,
        note: "Pola yang sama dipakai di PUT dan DELETE.",
      },
    ],
    limits: [
      "Satu password admin untuk semua orang, belum ada manajemen user.",
      "Tabel dibuat otomatis saat runtime, belum memakai migrasi.",
    ],
  },
];

export const otherRepos = [
  {
    name: "UKK Demo Marketplace",
    desc: "Marketplace Laravel 10 dengan TailwindCSS.",
    url: "https://github.com/Irsyadmr354/UKK-Demo-Marketplace-Laravel",
  },
  {
    name: "My Maklon Tracker",
    desc: "Pelacak produksi maklon madu.",
    url: "https://github.com/Irsyadmr354/My-Maklon-Tracker",
  },
  {
    name: "Valapp",
    desc: "Aplikasi pemantau toko dan rank Valorant.",
    url: "https://github.com/Irsyadmr354/Valapp",
  },
  {
    name: "tokesave-mcp",
    desc: "MCP server untuk menghemat token.",
    url: "https://github.com/Irsyadmr354/tokesave-mcp",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
