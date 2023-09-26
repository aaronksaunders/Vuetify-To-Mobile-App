// Composables
import { useAppStore } from "@/store/app";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    meta: { requiresAuth: false },
    children: [
      {
        path: "login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
      },
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "detail",
        name: "Detail",
        component: () =>
          import(/* webpackChunkName: "detail" */ "@/views/Detail.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = useAppStore().isAuthenticated;

  // Redirect authenticated users from the login page to the index page
  if (to.name === "Login" && isAuthenticated) {
    next("/"); // Replace 'Index' with the name of your index page route
    return;
  }

  if (to.meta.requiresAuth) {
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
