<script setup lang="ts">
import { site } from "@/content/site";

const printCv = () => {
  window.print();
};

const experience = site.experience;

const selectedWork = [
  {
    title: "SI Absensi Guru dan Karyawan",
    meta: "Laravel 12, MySQL, PHPUnit",
    body: "Absensi QR dengan token sekali pakai dan validasi jendela waktu. Menemukan dan memperbaiki bug menit terlambat, lalu mengunci perilakunya dengan 10 test.",
  },
  {
    title: "SI Toko Luxiva",
    meta: "Next.js 16, Prisma, MySQL",
    body: "Checkout dipindahkan ke satu transaksi database: validasi stok, potong stok bersyarat, buat order, kosongkan keranjang, dan tulis log dalam satu commit.",
  },
  {
    title: "KasirNano",
    meta: "Java 21, Swing, SQLite",
    body: "Penjualan dan pemotongan stok dijalankan pada satu koneksi dengan autocommit mati, sehingga kegagalan memotong stok membatalkan penjualan.",
  },
  {
    title: "Madu Asli Indonesia",
    meta: "Next.js 15, MySQL",
    body: "Menutup panel admin dan API tulis artikel dengan sesi HMAC httpOnly, serta memindahkan kunci endpoint dev ke environment.",
  },
];

const skills = [
  {
    label: "Bahasa",
    items: ["PHP", "JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    label: "Framework",
    items: ["Laravel", "Next.js", "React", "Vue", "Tailwind CSS", "Prisma", "Flutter"],
  },
  {
    label: "Data",
    items: ["MySQL", "SQLite", "Transaksi database", "Migrasi"],
  },
  {
    label: "Alat",
    items: ["Git", "Composer", "npm", "Vite", "PHPUnit", "javac"],
  },
];

const education = [
  {
    school: site.school,
    period: "",
    detail:
      "Fokus pada rekayasa perangkat lunak. Proyek akhir dan tugas besar mencakup aplikasi web, desktop, dan basis data relasional.",
  },
  {
    school: "SMPN 24 Surabaya",
    period: "Lulus 2021",
    detail: "",
  },
  {
    school: "SDN Kebraon 2 Surabaya",
    period: "Lulus 2018",
    detail: "",
  },
];
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
    <div class="no-print flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="eyebrow">CV</p>
        <h1 class="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Ringkas, siap cetak.</h1>
        <p class="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
          Versi ringkas dari isi situs. Tombol cetak membuka dialog print browser dan menyembunyikan navigasi.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-4">
        <a
          :href="site.cvPdf"
          download
          class="border border-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:border-stamp hover:text-stamp"
        >
          Unduh PDF English
        </a>
        <button
          type="button"
          class="bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-stamp"
          @click="printCv"
        >
          Cetak CV
        </button>
      </div>
    </div>

    <article class="cv-sheet mt-10 border border-rule bg-white px-6 py-8 sm:px-10 sm:py-10">
      <header class="border-b border-rule pb-6">
        <h2 class="font-display text-3xl tracking-tight">{{ site.fullName }}</h2>
        <p class="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          {{ site.role }} / {{ site.location }}
        </p>
        <ul class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <a class="link-quiet" :href="`mailto:${site.email}`">{{ site.email }}</a>
          </li>
          <li>
            <a class="link-quiet" :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noreferrer">
              WhatsApp {{ site.phone }}
            </a>
          </li>
          <li>
            <a class="link-quiet" :href="site.github" target="_blank" rel="noreferrer">
              github.com/{{ site.githubHandle }}
            </a>
          </li>
        </ul>
      </header>

      <section class="mt-6" aria-labelledby="cv-profil">
        <h3 id="cv-profil" class="eyebrow">Profil</h3>
        <p class="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">
          {{ site.intro }} Pengalaman magang di CV Rizki Barokah dan kerja project-based membiasakan saya dengan PHP, Laravel, dan JavaScript, sementara Java saya pakai di proyek desktop. Fokus pada kebenaran data: uang, stok, dan kehadiran harus tetap konsisten saat ada langkah yang gagal.
        </p>
      </section>

      <section class="mt-6" aria-labelledby="cv-pengalaman">
        <h3 id="cv-pengalaman" class="eyebrow">Pengalaman</h3>
        <ul class="mt-3 space-y-4">
          <li v-for="job in experience" :key="job.role">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p class="text-sm font-semibold">{{ job.role }}</p>
              <p class="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft">{{ job.period }}</p>
            </div>
            <p class="mt-0.5 text-xs text-ink-soft">{{ job.place }}</p>
            <ul class="mt-1.5 space-y-0.5">
              <li
                v-for="point in job.points"
                :key="point"
                class="max-w-3xl pl-3 text-sm leading-relaxed text-ink-soft"
              >
                {{ point }}
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="mt-6" aria-labelledby="cv-kerja">
        <h3 id="cv-kerja" class="eyebrow">Proyek terpilih</h3>
        <ul class="mt-3 space-y-4">
          <li v-for="work in selectedWork" :key="work.title">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p class="text-sm font-semibold">{{ work.title }}</p>
              <p class="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft">{{ work.meta }}</p>
            </div>
            <p class="mt-1 max-w-3xl text-sm leading-relaxed text-ink-soft">{{ work.body }}</p>
          </li>
        </ul>
      </section>

      <section class="mt-6" aria-labelledby="cv-skill">
        <h3 id="cv-skill" class="eyebrow">Kemampuan</h3>
        <dl class="mt-3 space-y-2">
          <div v-for="group in skills" :key="group.label" class="grid gap-1 sm:grid-cols-[6rem_1fr]">
            <dt class="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft">{{ group.label }}</dt>
            <dd class="text-sm">{{ group.items.join(", ") }}</dd>
          </div>
        </dl>
      </section>

      <section class="mt-6" aria-labelledby="cv-pendidikan">
        <h3 id="cv-pendidikan" class="eyebrow">Pendidikan</h3>
        <ul class="mt-3 space-y-3">
          <li v-for="item in education" :key="item.school">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p class="text-sm font-semibold">{{ item.school }}</p>
              <p v-if="item.period" class="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft">{{ item.period }}</p>
            </div>
            <p v-if="item.detail" class="mt-1 max-w-3xl text-sm leading-relaxed text-ink-soft">
              {{ item.detail }}
            </p>
          </li>
        </ul>
      </section>

      <footer class="mt-8 border-t border-rule pt-4">
        <p class="text-xs leading-relaxed text-ink-soft">
          Bukti test, potongan kode, dan batasan tiap proyek tersedia di halaman kerja situs ini. Repo privat dapat ditunjukkan saat wawancara.
        </p>
      </footer>
    </article>

    <p class="no-print mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
      Diperbarui 30 Oktober 2026
    </p>
  </div>
</template>
