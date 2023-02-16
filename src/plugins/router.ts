import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "@pages/HomePage.vue";
import JobPage from "@pages/JobPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/job", component: JobPage },
];

export default createRouter({
  history: createWebHistory("./"),
  routes,
});
