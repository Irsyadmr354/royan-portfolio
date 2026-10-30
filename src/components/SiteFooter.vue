<script setup lang="ts">
import { site } from "@/content/site";
</script>

<template>
  <footer class="no-print mt-20 border-t border-rule">
    <div
      class="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]"
    >
      <div>
        <p class="font-display text-xl">Royan</p>
        <p class="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          {{ site.status }}. {{ site.location }}.
        </p>
      </div>

      <div>
        <p class="eyebrow">Kontak</p>
        <ul class="mt-3 space-y-2 text-sm">
          <li>
            <a class="link-quiet" :href="`mailto:${site.email}`">{{ site.email }}</a>
          </li>
          <li>
            <a class="link-quiet" :href="site.github" target="_blank" rel="noreferrer">
              GitHub, {{ site.githubHandle }}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p class="eyebrow">Halaman</p>
        <ul class="mt-3 space-y-2 text-sm">
          <li><RouterLink class="link-quiet" to="/kerja">Kerja</RouterLink></li>
          <li><RouterLink class="link-quiet" to="/ai">Log AI</RouterLink></li>
          <li><RouterLink class="link-quiet" to="/cv">CV</RouterLink></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-rule">
      <div
        class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft sm:px-8"
      >
        <span>Vue 3, Vite, TypeScript, Tailwind</span>
        <span>Royan, 2026</span>
      </div>
    </div>
  </footer>
</template>
