<template>
  <div class="consola" style="border-style: solid; display: grid">
    <div>
      <h3 class="center-align">Sobre mí</h3>
      <div class="row">
        <img
          class="col s10 l3 m4 offset-s1"
          style="padding-top: 15px"
          src="../assets/foto.jpg"
          alt=""
        />
        <p class="col s10 l9 m8 offset-s1" style="text-align: justify">
          Hola. Mi nombre es Miguel Berrio, soy estudiante de la carrera de
          Ingeniería de sistemas. Soy un apasionado por la tecnología y su
          aplicación en las diferentes áreas de la vida, producto de ello me
          encuentro constantemente actualizándome y aprendiendo diferentes
          tecnologías, lo cual ha desarrollado en mi persona una alta capacidad
          de resiliencia ante cualquier eventualidad.
          <br />
          <br />
          "El motivo de estar vivos es ser felices" (Reir al ultimo, Norick)
        </p>
      </div>
      <div class="row" style="margin-bottom: 0">
        <p class="center-align redes">
          <a href="/">Xvideos</a>
          <a href="https://github.com/mabmab159">Github</a>
          <a href="https://twitter.com/mabmab0159">Twitter</a>
        </p>
      </div>
    </div>
    <img class="imagen" src="../assets/chibi.png" alt="" />
  </div>
</template>
<style scoped>
.consola {
  min-height: calc(100vh - 160px);
  background-color: black;
  font-family: monospace;
  padding: 0px 10px 10px 10px;
  margin: 5px;
}

.imagen {
  width: 150px;
  position: relative;
  left: calc(100% - 150px);
  top: calc(100% - 150px);
}

.foto img {
  height: 100%;
}

.redes a {
  margin: 0 15px;
}
</style>
