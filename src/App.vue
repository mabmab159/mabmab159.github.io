<template>
  <div class="blue-grey darken-1">
    <cabecera></cabecera>
    <div class="container" style="margin-top: 10px">
      <div class="right-align" id="menu">
        <router-link to="/">
          <i
            class="small material-icons tooltipped"
            data-position="top"
            data-tooltip="Inicio"
            >home</i
          >
        </router-link>
        <router-link to="about">
          <i
            class="small material-icons tooltipped"
            data-position="top"
            data-tooltip="Sobre mi"
            >account_circle</i
          >
        </router-link>
        <router-link to="skills"
          ><i
            class="small material-icons tooltipped"
            data-position="top"
            data-tooltip="Skills"
            >assignment</i
          >
        </router-link>
        <router-link to="trabajos">
          <i
            class="small material-icons tooltipped"
            data-position="top"
            data-tooltip="Trabajos"
            >folder_open</i
          >
        </router-link>
        <router-link to="contacto">
          <i
            class="small material-icons tooltipped"
            data-position="top"
            data-tooltip="Contacto"
            >email</i
          >
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
import M from "materialize-css";

export default {
  name: "App",
  components: {
    Cabecera,
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
.material-icons {
  background-color: rgba(42, 42, 42, 0.5);
  margin-right: 5px;
  padding: 10px;
}
.material-icons:hover {
  background-color: #588bf8;
}
#menu {
  display: block;
  position: relative;
}
</style>
