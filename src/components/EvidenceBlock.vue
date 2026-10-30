<script setup lang="ts">
import type { Evidence } from "@/content/projects";

defineProps<{ evidence: Evidence }>();
</script>

<template>
  <figure class="mt-8">
    <figcaption class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span class="eyebrow">{{ evidence.kind === "test" ? "Keluaran test" : evidence.kind === "code" ? "Potongan kode" : "Catatan" }}</span>
      <span class="text-sm font-medium">{{ evidence.title }}</span>
    </figcaption>

    <pre
      v-if="evidence.kind === 'code'"
      tabindex="0"
      aria-label="Potongan kode"
      class="mt-3 overflow-x-auto bg-ink p-4 font-mono text-[12.5px] leading-relaxed text-paper sm:p-5"
    ><code>{{ evidence.body }}</code></pre>

    <pre
      v-else-if="evidence.kind === 'test'"
      tabindex="0"
      aria-label="Keluaran test"
      class="mt-3 overflow-x-auto border border-rule bg-paper-deep p-4 font-mono text-[12.5px] leading-relaxed sm:p-5"
    ><code>{{ evidence.body }}</code></pre>

    <p v-else class="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
      {{ evidence.body }}
    </p>

    <p v-if="evidence.kind !== 'note' && evidence.note" class="mt-2 text-xs text-ink-soft">
      {{ evidence.note }}
    </p>
  </figure>
</template>
