import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: () => import("./views/HomeView.vue") },
    { path: "/kerja", name: "work", component: () => import("./views/WorkIndex.vue") },
    {
      path: "/kerja/:slug",
      name: "case-study",
      component: () => import("./views/CaseStudy.vue"),
      props: true,
    },
    { path: "/ai", name: "ai", component: () => import("./views/AiWorkflow.vue") },
    { path: "/tentang", name: "about", component: () => import("./views/AboutView.vue") },
    { path: "/cv", name: "cv", component: () => import("./views/CvView.vue") },
    { path: "/:pathMatch(.*)*", name: "not-found", component: () => import("./views/NotFound.vue") },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, top: 96 };
    }
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const titles: Record<string, string> = {
    home: "Royan, junior full stack programmer di Surabaya",
    work: "Kerja terpilih, Royan",
    "case-study": "Studi kasus, Royan",
    ai: "Cara saya memakai AI, Royan",
    about: "Tentang, Royan",
    cv: "CV, Royan",
    "not-found": "Halaman tidak ditemukan, Royan",
  };

  document.title = titles[String(to.name)] ?? "Royan";
});

export default router;
