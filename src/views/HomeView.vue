<script setup lang="ts">
import { projects } from "@/content/projects";
import { aiLog } from "@/content/aiLog";
import { site } from "@/content/site";

const facts = [
  { value: "10", label: "test lulus di proyek absensi" },
  { value: "34", label: "API route di Luxiva" },
  { value: "3", label: "celah auth ditutup di situs madu" },
  { value: "1", label: "smoke test transaksi kasir" },
];

const featured = projects;
const latestLogs = aiLog.slice(-2).reverse();
</script>

<template>
  <div>
    <section class="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-8 sm:pt-16">
      <div class="grid gap-12 md:grid-cols-[1.55fr_1fr] md:gap-16">
        <div>
          <p class="eyebrow">Royan / junior full stack programmer / Surabaya</p>

          <h1
            class="mt-6 font-display text-[2.6rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.4rem]"
          >
            Sistem yang menghitung uang, stok, dan kehadiran
            <span class="italic text-stamp">dengan benar.</span>
          </h1>

          <p class="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {{ site.intro }}
          </p>

          <div class="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <RouterLink
              to="/kerja"
              class="bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-stamp"
            >
              Lihat lima proyek
            </RouterLink>
            <RouterLink to="/ai" class="link-quiet text-sm font-medium">
              Baca log kerja dengan AI
            </RouterLink>
          </div>
        </div>

        <aside class="flex flex-col justify-between gap-8 md:border-l md:border-rule md:pl-10">
          <span class="stamp self-start">Terbuka untuk peran junior</span>

          <dl class="space-y-4 font-mono text-xs leading-relaxed">
            <div class="flex justify-between gap-4 border-t border-rule pt-3">
              <dt class="uppercase tracking-[0.12em] text-ink-soft">Basis</dt>
              <dd class="text-right">Surabaya</dd>
            </div>
            <div class="flex justify-between gap-4 border-t border-rule pt-3">
              <dt class="uppercase tracking-[0.12em] text-ink-soft">Pendidikan</dt>
              <dd class="text-right">SMK, RPL</dd>
            </div>
            <div class="flex justify-between gap-4 border-t border-rule pt-3">
              <dt class="uppercase tracking-[0.12em] text-ink-soft">Fokus</dt>
              <dd class="text-right">Web, database, tooling</dd>
            </div>
            <div class="flex justify-between gap-4 border-t border-b border-rule py-3">
              <dt class="uppercase tracking-[0.12em] text-ink-soft">GitHub</dt>
              <dd class="text-right">
                <a class="link-quiet" :href="site.github" target="_blank" rel="noreferrer">
                  {{ site.githubHandle }}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <section aria-labelledby="bukti" class="border-y border-rule bg-paper-deep">
      <div class="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <h2 id="bukti" class="eyebrow">Bukti, bukan klaim</h2>
        <dl class="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
          <div v-for="fact in facts" :key="fact.label">
            <dt class="sr-only">{{ fact.label }}</dt>
            <dd>
              <span class="block font-display text-4xl leading-none sm:text-5xl">{{ fact.value }}</span>
              <span class="mt-2 block max-w-[16ch] text-xs leading-snug text-ink-soft">{{ fact.label }}</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section aria-labelledby="kerja" class="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div class="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="kerja" class="font-display text-3xl tracking-tight sm:text-4xl">Kerja terpilih</h2>
        <RouterLink to="/kerja" class="link-quiet font-mono text-xs uppercase tracking-[0.12em]">
          Semua proyek
        </RouterLink>
      </div>

      <ol class="mt-8 border-b border-rule">
        <li v-for="project in featured" :key="project.slug">
          <RouterLink
            :to="`/kerja/${project.slug}`"
            class="ledger-row grid gap-x-6 gap-y-3 py-6 sm:grid-cols-[3rem_1fr_auto]"
          >
            <span class="font-mono text-xs text-ink-soft">{{ project.index }}</span>

            <span>
              <span class="block font-display text-2xl leading-tight tracking-tight">
                {{ project.title }}
              </span>
              <span class="mt-1 block max-w-2xl text-sm leading-relaxed text-ink-soft">
                {{ project.summary }}
              </span>
              <span class="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
                <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
              </span>
            </span>

            <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft sm:text-right">
              {{ project.kind }}
            </span>
          </RouterLink>
        </li>
      </ol>
    </section>

    <section aria-labelledby="ai" class="border-t border-rule">
      <div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p class="eyebrow">Log kerja</p>
          <h2 id="ai" class="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
            AI menulis cepat. Saya yang memutuskan.
          </h2>
          <p class="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            Setiap perubahan besar di halaman ini punya catatan: prompt, keluaran AI, bagian yang saya ubah, dan hasilnya.
          </p>
          <RouterLink to="/ai" class="mt-6 inline-block link-quiet text-sm font-medium">
            Lihat seluruh log
          </RouterLink>
        </div>

        <ol class="space-y-8 md:border-l md:border-rule md:pl-10">
          <li v-for="entry in latestLogs" :key="entry.task">
            <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">{{ entry.date }}</p>
            <h3 class="mt-2 text-base font-semibold">{{ entry.task }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-soft">{{ entry.humanChange }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section aria-labelledby="prinsip" class="border-t border-rule">
      <div class="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 id="prinsip" class="eyebrow">Prinsip kerja</h2>
        <dl class="mt-8 grid gap-10 md:grid-cols-3 md:gap-12">
          <div v-for="(item, index) in site.principles" :key="item.title">
            <dt class="flex items-baseline gap-3">
              <span class="font-mono text-xs text-stamp">{{ String(index + 1).padStart(2, "0") }}</span>
              <span class="font-display text-xl leading-tight">{{ item.title }}</span>
            </dt>
            <dd class="mt-3 text-sm leading-relaxed text-ink-soft">{{ item.body }}</dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>
