<template>
  <div class="blue-grey darken-1">
    <cabecera></cabecera>
    <div class="container" style="margin-top: 10px">
      <rutas></rutas>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
var supportsOrientationChange = "onorientationchange" in window,
  orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
window.addEventListener(
  orientationEvent,
  function () {
    if (window.orientation === 0) {
      location.href = "https://miguelberrio.netlify.app/";
    }
  },
  false
);

import Cabecera from "./components/Cabecera.vue";
import M from "materialize-css";
import Rutas from "./components/Rutas.vue";

export default {
  name: "App",
  components: {
    Cabecera,
    Rutas,
  },
  data() {
    return {
      validador: false,
    };
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
* {
  color: white;
}
</style>
