<script setup lang="ts">
import { site } from "@/content/site";

const links = [
  { label: "Kerja", to: "/kerja" },
  { label: "AI", to: "/ai" },
  { label: "Tentang", to: "/tentang" },
  { label: "CV", to: "/cv" },
];
</script>

<template>
  <header class="no-print border-b border-rule">
    <div
      class="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-5 py-5 sm:px-8"
    >
      <RouterLink to="/" class="group flex items-baseline gap-3" aria-label="Royan, beranda">
        <span class="font-display text-2xl font-medium tracking-tight">Royan</span>
        <span class="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft sm:inline">
          {{ site.role }}
        </span>
      </RouterLink>

      <nav aria-label="Navigasi utama">
        <ul class="flex items-center gap-5 sm:gap-7">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline hover:decoration-rule hover:decoration-2"
              active-class="text-ink underline decoration-stamp decoration-2 underline-offset-4"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
