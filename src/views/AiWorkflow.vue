<script setup lang="ts">
import { aiLog } from "@/content/aiLog";
import { site } from "@/content/site";

const entries = [...aiLog].reverse();

const rules = [
  {
    title: "Konteks dulu, kode kemudian",
    body: "Saya menuliskan perilaku yang diinginkan, file yang boleh disentuh, dan cara membuktikan hasilnya sebelum meminta kode.",
  },
  {
    title: "Setiap keluaran dibaca",
    body: "Saran AI saya perlakukan sebagai patch dari orang lain: dibaca, diuji, dan sering dipotong sebelum masuk.",
  },
  {
    title: "Test adalah wasit",
    body: "Kalau test gagal, kode belum selesai, sekalipun terlihat rapi. Kalau test tidak ada, saya tulis dulu.",
  },
];
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
    <header class="grid gap-8 md:grid-cols-[1.3fr_1fr] md:gap-16">
      <div>
        <p class="eyebrow">Cara kerja</p>
        <h1 class="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          Log kerja dengan AI, terbuka dan bisa diperiksa.
        </h1>
        <p class="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
          Saya memakai asisten AI setiap hari. Halaman ini mencatat tugas, prompt, keluaran AI, bagian yang saya ubah, dan hasil akhirnya. Tidak ada log yang saya rapikan agar terlihat lebih pintar.
        </p>
      </div>

      <aside class="md:border-l md:border-rule md:pl-10">
        <p class="stamp">Empat entri, satu hari kerja</p>
        <p class="mt-6 text-sm leading-relaxed text-ink-soft">
          Semua entri berasal dari pekerjaan nyata pada 30 Oktober 2026:
          {{ site.location.split(",")[0] }}, empat repositori, satu sesi perbaikan.
        </p>
      </aside>
    </header>

    <section aria-labelledby="aturan" class="mt-14 border-y border-rule py-8">
      <h2 id="aturan" class="eyebrow">Aturan main</h2>
      <dl class="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
        <div v-for="(rule, index) in rules" :key="rule.title">
          <dt class="flex items-baseline gap-3">
            <span class="font-mono text-xs text-stamp">{{ String(index + 1).padStart(2, "0") }}</span>
            <span class="font-display text-xl leading-tight">{{ rule.title }}</span>
          </dt>
          <dd class="mt-2 text-sm leading-relaxed text-ink-soft">{{ rule.body }}</dd>
        </div>
      </dl>
    </section>

    <section aria-labelledby="log" class="mt-14">
      <div class="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="log" class="font-display text-3xl tracking-tight sm:text-4xl">Entri terbaru</h2>
        <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">{{ entries.length }} entri</span>
      </div>

      <ol class="mt-8 space-y-12">
        <li
          v-for="entry in entries"
          :key="entry.task"
          class="grid gap-6 border-t border-rule pt-8 md:grid-cols-[10rem_1fr] md:gap-10"
        >
          <div>
            <p class="font-mono text-xs text-ink-soft">{{ entry.date }}</p>
            <h3 class="mt-2 font-display text-2xl leading-tight tracking-tight">{{ entry.task }}</h3>
          </div>

          <dl class="space-y-6">
            <div>
              <dt class="eyebrow">Prompt</dt>
              <dd class="mt-2 max-w-2xl border-l-2 border-rule pl-4 text-sm leading-relaxed">
                {{ entry.prompt }}
              </dd>
            </div>
            <div>
              <dt class="eyebrow">Keluaran AI</dt>
              <dd class="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{{ entry.aiOutput }}</dd>
            </div>
            <div>
              <dt class="eyebrow">Yang saya ubah</dt>
              <dd class="mt-2 max-w-2xl border-l-2 border-stamp pl-4 text-sm leading-relaxed">{{ entry.humanChange }}</dd>
            </div>
            <div>
              <dt class="eyebrow">Hasil</dt>
              <dd class="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{{ entry.result }}</dd>
            </div>
          </dl>
        </li>
      </ol>
    </section>

    <section aria-labelledby="batas" class="mt-16 border-t border-rule pt-10">
      <h2 id="batas" class="eyebrow">Batas yang saya pegang</h2>
      <div class="body-copy mt-4">
        <p>
          AI tidak saya pakai untuk mengarang isi portfolio. Angka, keluaran test, dan potongan kode di situs ini berasal dari repo dan terminal yang benar-benar dijalankan.
        </p>
        <p>
          Kalau ada pekerjaan yang belum punya bukti, saya tulis apa adanya di bagian batasan. Itu lebih berguna daripada klaim yang tidak bisa saya pertanggungjawabkan saat wawancara.
        </p>
      </div>
    </section>
  </div>
</template>
