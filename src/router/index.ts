// Composables
import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "/old",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/login",
    component: () => import(/* webpackChunkName: "home" */ "@/views/LoginPage.vue"),
  },
  {
    path: "/create-account",
    component: () => import(/* webpackChunkName: "home" */ "@/views/CreateAccountPage.vue"),
  },
  {
    path: "/detail",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/NextPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
