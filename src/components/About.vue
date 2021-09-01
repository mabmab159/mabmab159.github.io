<template>
  <div class="consola" style="border-style: solid; display: grid">
    <div style="display: block">
      <p style="color: rgb(0, 164, 0); margin-bottom: 0px">
        MabMab@Desktop
        <span style="color: rgb(191, 191, 0)">~/Portafolio</span>
        <span style="color: rgb(0, 191, 191)">&#160;(sobre_mi)</span>
      </p>
      <p class="test">$ run about-me&#160;<span>&#160;</span></p>
      <br />
      <br />
      <div class="row">
        <div id="consola1" class="row"></div>
        <div id="consola2" class="row"></div>
      </div>
    </div>
    <img class="imagen" src="../assets/chibi.png" alt="" />
  </div>
</template>
<script>
export default {
  mounted() {
    let variable1 = document.getElementById("consola1");
    let variable2 = document.getElementById("consola2");
    setTimeout(() => {
      this.validador = true;
      variable1.innerHTML = `
            <div class="col s12 m8 l9 xl10">
              <h4 style="color: rgb(191,0,191)">##Sobre mi</h4>
              <p>Hola. Mi nombre es Miguel Berrio, soy estudiante de la carrera de
              Ingeniería de sistemas. Soy un apasionado por la tecnología y su
              aplicación en las diferentes áreas de la vida, producto de ello me
              encuentro constantemente actualizándome y aprendiendo diferentes
              tecnologías, lo cual ha desarrollado en mi persona una alta capacidad
              de resiliencia ante cualquier eventualidad.</p>
              <span><h4 style="color: rgb(191,0,191)">##Redes</h4></span>
              <table>
                <td><a href="https://www.linkedin.com/in/miguel-angel-berrio-huamani-842123162/">Linkedin</a></td>
                <td><a href="https://github.com/mabmab159">Github</a></td>
                <td><a href="https://twitter.com/mabmab0159">Twitter</a></td>
              </table>
            </div>
            <div class="col s8 m4 l3 xl2 offset-s2">
              <img src="https://github.com/mabmab159/Portafolio/blob/main/src/assets/foto.jpeg?raw=true" style="width: 100%; margin-top: 20px"/>
            </div> 
            <h4 style="color: rgb(191,0,191)"></h4>     
        `;
      variable2.innerHTML = `<p style='color: rgb(0,164,0); margin-bottom: 0px'>MabMab@Desktop
              <span style='color: rgb(191,191,0)'>~/Portafolio</span>
              <span style='color: rgb(0,191,191)'>(sobre_mi)</span>
            </p>`;
    }, 1500);
  },
  beforeUnmount() {
    let variable1 = document.getElementById("consola1");
    variable1.innerHTML = ``;
    let variable2 = document.getElementById("consola2");
    variable2.innerHTML = ``;
  },
};
</script>
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

.foto {
  width: 100%;
}

.test {
  position: relative;
  float: left;
}

.test span {
  position: absolute;
  background-color: black;
  right: 0;
  animation: maquina 1.4s steps(14);
}

@keyframes maquina {
  0% {
    width: 100%;
    border-left: 1px solid white;
  }
  100% {
    width: 0%;
    border-left: 1px solid white;
  }
}
</style>
