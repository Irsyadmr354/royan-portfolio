<template>
  <div class="mx-auto max-w-3xl px-5 py-24 sm:px-8">
    <p class="eyebrow">404</p>
    <h1 class="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
      Halaman ini tidak ada di buku besar.
    </h1>
    <p class="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
      Alamat yang dibuka tidak cocok dengan halaman mana pun. Mungkin salah ketik, atau tautan lama sudah dipindahkan.
    </p>
    <div class="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
      <RouterLink
        to="/"
        class="bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-stamp"
      >
        Ke beranda
      </RouterLink>
      <RouterLink to="/kerja" class="link-quiet text-sm">Lihat daftar kerja</RouterLink>
    </div>
  </div>
</template>
