<script setup lang="ts">
import { site } from "@/content/site";

const focus = [
  {
    label: "Aplikasi web",
    body: "Laravel dan Next.js. Rute, middleware, sesi, validasi, dan halaman yang tetap berguna saat data kosong.",
  },
  {
    label: "Data dan uang",
    body: "Transaksi database, stok bersyarat, tipe data uang yang tidak membulatkan diam-diam.",
  },
  {
    label: "Perkakas kecil",
    body: "CLI, MCP server, dan utilitas yang mengurangi pekerjaan berulang tanpa menambah ketergantungan.",
  },
];

const timeline = [
  {
    time: "Sekolah",
    title: "SMK 17 Agustus 1945 Surabaya, Rekayasa Perangkat Lunak",
    body: "Belajar dengan proyek utuh: absensi, toko online, kasir, dan situs produk. Penilaian tidak berhenti di tampilan, tetapi sampai ke alur data.",
  },
  {
    time: "2024 - sekarang",
    title: "Full Stack Programmer, intern dan project-based",
    body: "Mengembangkan aplikasi web dengan PHP, Laravel, HTML, CSS, dan JavaScript, menghubungkan front-end dengan database, lalu menelusuri bug bersama tim.",
  },
  {
    time: "2025",
    title: "IT Support, Content Creator & Marketing di CV Rizki Barokah",
    body: "Magang enam bulan: dukungan teknis harian, perawatan sistem web internal, konten promosi, dan pemasaran digital.",
  },
  {
    time: "Sekarang",
    title: "Mencari peran junior, magang, atau kontrak",
    body: "Terbuka untuk tim yang memakai AI dalam alur kerja dan tetap menuntut kode yang bisa diuji. Lokasi Surabaya, siap bekerja remote.",
  },
];
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
    <div class="grid gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
      <div>
        <p class="eyebrow">Tentang</p>
        <h1 class="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          Saya lebih suka sistem yang bisa saya buktikan.
        </h1>
        <div class="body-copy mt-7">
          <p v-for="paragraph in site.about" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>

      <aside class="md:border-l md:border-rule md:pl-10">
        <span class="stamp">{{ site.status }}</span>
        <dl class="mt-8 space-y-4 font-mono text-xs">
          <div class="flex justify-between gap-4 border-t border-rule pt-3">
            <dt class="uppercase tracking-[0.12em] text-ink-soft">Nama</dt>
            <dd class="text-right">{{ site.fullName }}</dd>
          </div>
          <div class="flex justify-between gap-4 border-t border-rule pt-3">
            <dt class="uppercase tracking-[0.12em] text-ink-soft">Lokasi</dt>
            <dd class="text-right">{{ site.location }}</dd>
          </div>
          <div class="flex justify-between gap-4 border-t border-rule pt-3">
            <dt class="uppercase tracking-[0.12em] text-ink-soft">Pendidikan</dt>
            <dd class="max-w-[16rem] text-right">SMK, RPL</dd>
          </div>
          <div class="border-t border-b border-rule py-3">
            <dt class="uppercase tracking-[0.12em] text-ink-soft">Email</dt>
            <dd class="mt-2 normal-case">
              <a class="link-quiet" :href="`mailto:${site.email}`">{{ site.email }}</a>
            </dd>
          </div>
          <div class="border-b border-rule py-3">
            <dt class="uppercase tracking-[0.12em] text-ink-soft">GitHub</dt>
            <dd class="mt-2 normal-case">
              <a class="link-quiet" :href="site.github" target="_blank" rel="noreferrer">
                {{ site.githubHandle }}
              </a>
            </dd>
          </div>
        </dl>
      </aside>
    </div>

    <section aria-labelledby="fokus" class="mt-16 border-t border-rule pt-10">
      <h2 id="fokus" class="eyebrow">Yang saya kerjakan</h2>
      <dl class="mt-8 grid gap-10 md:grid-cols-3 md:gap-12">
        <div v-for="item in focus" :key="item.label">
          <dt class="font-display text-xl leading-tight">{{ item.label }}</dt>
          <dd class="mt-2 text-sm leading-relaxed text-ink-soft">{{ item.body }}</dd>
        </div>
      </dl>
    </section>

    <section aria-labelledby="jalan" class="mt-16 border-t border-rule pt-10">
      <h2 id="jalan" class="eyebrow">Jalan singkat</h2>
      <ol class="mt-8 border-b border-rule">
        <li
          v-for="item in timeline"
          :key="item.title"
          class="ledger-row grid gap-3 py-6 sm:grid-cols-[9rem_1fr] sm:gap-8"
        >
          <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">{{ item.time }}</span>
          <span>
            <span class="block font-display text-xl leading-tight">{{ item.title }}</span>
            <span class="mt-2 block max-w-2xl text-sm leading-relaxed text-ink-soft">{{ item.body }}</span>
          </span>
        </li>
      </ol>
    </section>

    <section aria-labelledby="prinsip" class="mt-16 border-t border-rule pt-10">
      <h2 id="prinsip" class="eyebrow">Prinsip kerja</h2>
      <dl class="mt-8 grid gap-10 md:grid-cols-3 md:gap-12">
        <div v-for="(item, index) in site.principles" :key="item.title">
          <dt class="flex items-baseline gap-3">
            <span class="font-mono text-xs text-stamp">{{ String(index + 1).padStart(2, "0") }}</span>
            <span class="font-display text-xl leading-tight">{{ item.title }}</span>
          </dt>
          <dd class="mt-2 text-sm leading-relaxed text-ink-soft">{{ item.body }}</dd>
        </div>
      </dl>
    </section>

    <section class="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-rule pt-8">
      <a
        :href="`mailto:${site.email}`"
        class="bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-stamp"
      >
        Kirim email
      </a>
      <RouterLink to="/kerja" class="link-quiet text-sm">Lihat kerja terpilih</RouterLink>
      <RouterLink to="/cv" class="link-quiet text-sm">Buka CV</RouterLink>
      <a :href="site.cvPdf" download class="link-quiet text-sm">Unduh CV English</a>
    </section>
  </div>
</template>
