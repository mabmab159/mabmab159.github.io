<template>
  <div class="consola" style="border-style: solid; display: grid">
    <div>
      <p style="color: rgb(0, 164, 0); margin-bottom: 0px">
        MabMab@Desktop
        <span style="color: rgb(191, 191, 0)">~/Portafolio</span>
        <span style="color: rgb(0, 191, 191)">&#160;(inicio)</span>
      </p>
      <p class="test">$ run portafolio&#160;<span>&#160;</span></p>
      <br />
      <br />
      <div class="row">
        <div id="consola1" class="row"></div>
      </div>
    </div>
    <img src="../assets/chibi.png" alt="" />
  </div>
</template>
<script>
export default {
  mounted() {
    let variable1 = document.getElementById("consola1");
    setTimeout(() => {
      variable1.innerHTML = `
            <h4 style="color: rgb(191,0,191)">##Inicio</h4>
            <p>
                Hola soy Miguel Berrio &#60MabMab^^&#62, bienvenido a mi portafolio.           
            </p>
            <p>
                Usa las opciones del menu ubicado en la parte superior derecha para navegar en este portafolio.           
            </p>
            <p>
                Feedback: Miguel Berrio &#60miguelberrioh@gmail.com&#62
            </p>
            <p style='color: rgb(0,164,0); margin-bottom: 0px'>MabMab@Desktop
                <span style='color: rgb(191,191,0)'>~/Portafolio</span>
                <span style='color: rgb(0,191,191)'>(inicio)</span>
            </p>
        `;
    }, 1700);
  },
  updated() {},
  beforeUnmount() {
    let variable1 = document.getElementById("consola1");
    variable1.innerHTML = `    
        `;
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

img {
  width: 150px;
  position: relative;
  left: calc(100% - 150px);
  top: calc(100% - 150px);
}

.test,
.test2 {
  position: relative;
  float: left;
}

.test span {
  position: absolute;
  background-color: black;
  right: 0;
  animation: maquina 1.6s steps(16);
}

.test2 span {
  position: absolute;
  background-color: black;
  right: 0;
  animation: maquina2 3.6s steps(19);
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

@keyframes maquina2 {
  0% {
    width: 100%;
  }
  49% {
    width: 100%;
    border: none;
  }
  59% {
    width: 100%;
    border-left: 1px solid white;
  }
  100% {
    width: 0%;
    border-left: 1px solid white;
  }
}
</style>
