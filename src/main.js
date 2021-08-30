import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "materialize-css/dist/css/materialize.min.css";

createApp(App).use(router).mount("#app");
