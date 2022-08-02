import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Destination",
    name: "Destination",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Destination.vue"),
  },
  {
    path: "/Crew",
    name: "Crew",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Crew.vue"),
  },
  {
    path: "/Technology",
    name: "Technology",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Technology.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
