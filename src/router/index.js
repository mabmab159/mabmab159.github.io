import { createRouter, createWebHistory } from "vue-router";

import Portada from "../components/Portada";
import Contacto from "../components/Contacto";
import Trabajos from "../components/Trabajos";
import Skills from "../components/Skills";
import NotFound from "../components/NotFound";
import About from "../components/About";

const routes = [
  { path: "/", name: "portada", component: Portada },
  { path: "/contacto", name: "contacto", component: Contacto },
  { path: "/trabajos", name: "trabajos", component: Trabajos },
  { path: "/skills", name: "skills", component: Skills },
  { path: "/about", name: "about", component: About },
  { path: "/:pathMatch(.*)", name: "notfound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
