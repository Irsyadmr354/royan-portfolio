<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { getProject, projects } from "@/content/projects";
import EvidenceBlock from "@/components/EvidenceBlock.vue";

const props = defineProps<{ slug: string }>();

const project = computed(() => getProject(props.slug));

const position = computed(() =>
  projects.findIndex((item) => item.slug === props.slug)
);

const previous = computed(() => (position.value > 0 ? projects[position.value - 1] : null));
const next = computed(() =>
  position.value >= 0 && position.value < projects.length - 1
    ? projects[position.value + 1]
    : null
);

const setTitle = () => {
  document.title = project.value
    ? `${project.value.title}, Royan`
    : "Studi kasus tidak ditemukan, Royan";
};

onMounted(setTitle);
watch(project, setTitle);
</script>

<template>
  <div v-if="project" class="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
    <RouterLink to="/kerja" class="link-quiet font-mono text-[11px] uppercase tracking-[0.14em]">
      Kembali ke daftar kerja
    </RouterLink>

    <div class="mt-8 grid gap-10 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-14">
      <aside class="min-w-0 md:sticky md:top-8 md:self-start">
        <p class="font-mono text-xs text-ink-soft">{{ project.index }}</p>
        <h1 class="mt-2 font-display text-4xl leading-[1.05] tracking-tight">
          {{ project.title }}
        </h1>

        <dl class="mt-6 space-y-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
          <div class="flex justify-between gap-3 border-t border-rule pt-2">
            <dt>Jenis</dt>
            <dd class="text-right text-ink">{{ project.kind }}</dd>
          </div>
          <div class="flex justify-between gap-3 border-t border-rule pt-2">
            <dt>Tahun</dt>
            <dd class="text-right text-ink">{{ project.year }}</dd>
          </div>
          <div class="border-t border-rule pt-2">
            <dt>Stack</dt>
            <dd class="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-ink">
              <span v-for="tech in project.stack" :key="tech" class="normal-case tracking-normal">
                {{ tech }}
              </span>
            </dd>
          </div>
        </dl>

        <a
          v-if="project.repo"
          :href="project.repo"
          target="_blank"
          rel="noreferrer"
          class="mt-6 inline-block bg-ink px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-stamp"
        >
          {{ project.repoLabel }}
        </a>
        <p v-else class="mt-6 border-l-2 border-rule pl-3 text-xs leading-relaxed text-ink-soft">
          {{ project.accessNote }}
        </p>
      </aside>

      <article class="min-w-0">
        <p class="max-w-2xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
          {{ project.summary }}
        </p>

        <dl class="mt-10 grid grid-cols-3 gap-6 border-y border-rule py-6">
          <div v-for="item in project.highlights" :key="item.label">
            <dt class="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">{{ item.label }}</dt>
            <dd class="mt-1 font-display text-2xl leading-tight">{{ item.value }}</dd>
          </div>
        </dl>

        <section class="mt-12" aria-labelledby="masalah">
          <h2 id="masalah" class="eyebrow">Masalah</h2>
          <div class="body-copy mt-4">
            <p v-for="paragraph in project.problem" :key="paragraph">{{ paragraph }}</p>
          </div>
        </section>

        <section class="mt-12" aria-labelledby="perubahan">
          <h2 id="perubahan" class="eyebrow">Yang saya ubah</h2>
          <ol class="mt-5 space-y-7">
            <li v-for="(change, index) in project.changes" :key="change.title" class="grid gap-3 sm:grid-cols-[2rem_1fr]">
              <span class="font-mono text-xs text-stamp">{{ String(index + 1).padStart(2, "0") }}</span>
              <span>
                <span class="block text-base font-semibold">{{ change.title }}</span>
                <span class="mt-1 block max-w-2xl text-sm leading-relaxed text-ink-soft">{{ change.body }}</span>
              </span>
            </li>
          </ol>
        </section>

        <section class="mt-12" aria-labelledby="bukti">
          <h2 id="bukti" class="eyebrow">Bukti</h2>
          <EvidenceBlock v-for="item in project.evidence" :key="item.title" :evidence="item" />
        </section>

        <section class="mt-12" aria-labelledby="batasan">
          <h2 id="batasan" class="eyebrow">Batasan</h2>
          <ul class="mt-4 space-y-2">
            <li
              v-for="limit in project.limits"
              :key="limit"
              class="max-w-2xl border-l border-rule pl-4 text-sm leading-relaxed text-ink-soft"
            >
              {{ limit }}
            </li>
          </ul>
        </section>

        <nav aria-label="Proyek lain" class="mt-16 flex flex-wrap justify-between gap-6 border-t border-rule pt-6">
          <RouterLink
            v-if="previous"
            :to="`/kerja/${previous.slug}`"
            class="link-quiet text-sm"
          >
            Sebelumnya: {{ previous.title }}
          </RouterLink>
          <span v-else class="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">Awal daftar</span>

          <RouterLink v-if="next" :to="`/kerja/${next.slug}`" class="link-quiet text-sm">
            Berikutnya: {{ next.title }}
          </RouterLink>
          <span v-else class="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">Akhir daftar</span>
        </nav>
      </article>
    </div>
  </div>

  <div v-else class="mx-auto max-w-3xl px-5 py-24 sm:px-8">
    <p class="eyebrow">404</p>
    <h1 class="mt-3 font-display text-4xl tracking-tight">Studi kasus tidak ditemukan.</h1>
    <p class="mt-4 text-sm text-ink-soft">Alamat ini tidak cocok dengan proyek mana pun.</p>
    <RouterLink to="/kerja" class="mt-6 inline-block link-quiet text-sm">Kembali ke daftar kerja</RouterLink>
  </div>
</template>
