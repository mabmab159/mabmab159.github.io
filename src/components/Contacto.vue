<template>
  <div class="consola" style="border-style: solid; display: grid">
    <div>
      <h3>Contactame</h3>
      <p class="test">Numero de contacto x aca :v.<span>&#160;</span></p>
    </div>
    <img class="imagen" src="../assets/chibi.png" alt="" />
  </div>
</template>
<script>
export default {};
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
  animation: maquina 2s steps(27);
  border-left: 1px solid white;
}

@keyframes maquina {
  to {
    width: 00%;
  }
  from {
    width: 100%;
  }
}
</style>
