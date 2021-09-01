import { createRouter, createWebHistory } from "vue-router";

const Portada = () => import("../components/Portada");
const Contacto = () => import("../components/Contacto");
const Trabajos = () => import("../components/Trabajos");
const Skills = () => import("../components/Skills");
const NotFound = () => import("../components/NotFound");
const About = () => import("../components/About");

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
