<script setup lang="ts">
import { otherRepos, projects } from "@/content/projects";
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
    <p class="eyebrow">Kerja</p>
    <h1 class="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
      Lima sistem, satu pertanyaan: apakah datanya tetap benar saat ada yang gagal?
    </h1>
    <p class="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
      Dua proyek bisa dibuka publik. Tiga masih privat dan disebutkan apa adanya. Setiap halaman berisi masalah, perubahan, bukti, dan batasan.
    </p>

    <ol class="mt-12 border-b border-rule">
      <li v-for="project in projects" :key="project.slug">
        <RouterLink
          :to="`/kerja/${project.slug}`"
          class="ledger-row grid gap-x-6 gap-y-3 py-8 sm:grid-cols-[3rem_1fr_auto]"
        >
          <span class="font-mono text-xs text-ink-soft">{{ project.index }}</span>

          <span>
            <span class="block font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {{ project.title }}
            </span>
            <span class="mt-2 block max-w-2xl text-sm leading-relaxed text-ink-soft">
              {{ project.summary }}
            </span>
            <span class="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
              <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
            </span>
          </span>

          <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft sm:text-right">
            <span class="block">{{ project.year }}</span>
            <span class="mt-1 block">{{ project.kind }}</span>
          </span>
        </RouterLink>
      </li>
    </ol>

    <section aria-labelledby="lain" class="mt-16">
      <h2 id="lain" class="eyebrow">Repo publik lain</h2>
      <ul class="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
        <li v-for="repo in otherRepos" :key="repo.url" class="border-t border-rule pt-3">
          <a :href="repo.url" target="_blank" rel="noreferrer" class="group flex items-baseline justify-between gap-4">
            <span>
              <span class="block text-sm font-medium group-hover:text-stamp">{{ repo.name }}</span>
              <span class="mt-1 block text-xs text-ink-soft">{{ repo.desc }}</span>
            </span>
            <span class="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
