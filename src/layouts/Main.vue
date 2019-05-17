<template>
  <div class="bg">
    <div id="app">
      <Header/>
      <slot id="content"></slot>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
body,
html {
  height: 100%;
  width: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0ebe08;
}

.bg {
  /* The image used */
  background-image: url("../assets/background.jpg");

  height: 100%;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
