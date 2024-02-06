import { createRouter, createWebHistory } from "vue-router";

import ClientePage from "../views/ClientePage.vue";
import CasaPage from "../views/CasaPage.vue";
import ContratoPage from "../views/ContratoPage.vue";
import HomePage from "../views/HomePage.vue";
import ApiPage from '../views/ApiPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      component:HomePage
    },
    {
      path: "/cliente",
      component: ClientePage,
    },
    {
      path: "/contrato",
      component: ContratoPage,
    },
    {
      path: "/casa",
      component: CasaPage,
    },
    {
      path: "/api",
      component: ApiPage,
    },
  ],
});

export default router;
