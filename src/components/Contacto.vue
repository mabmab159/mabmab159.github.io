p
<template>
  <div class="consola" style="border-style: solid; display: grid">
    <div>
      <p style="color: rgb(0, 164, 0); margin-bottom: 0px">
        MabMab@Desktop
        <span style="color: rgb(191, 191, 0)">~/Portafolio</span>
      </p>
      <p class="test">$ run contacto&#160;<span>&#160;</span></p>
      <br />
      <br />
      <div class="row">
        asdasd
        <div id="consola1" class="row"></div>
      </div>
    </div>
    <img class="imagen" src="../assets/chibi.png" alt="" />
  </div>
</template>
<script>
export default {
  mounted() {
    let variable1 = document.getElementById("consola1");
    setTimeout(() => {
      variable1.innerHTML = `
            <h4>#Contacto</h4>
            <p>Contacto: {</p>
            <p>Celular: (+51) 912-437-377</p>
            <p>Email: miguelberrioh@gmail.com</p>
            <p>Github: mabmab159</p>
            <p>Descargar: <span><a href="../assets/Prueba.pdf" download="MiguelBerrio.pdf">test</a></span> </p>
            <p>}</p>
        `;
    }, 2100);
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

.test {
  position: relative;
  float: left;
}

.test span {
  position: absolute;
  background-color: black;
  right: 0;
  animation: maquina 2s steps(13);
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
