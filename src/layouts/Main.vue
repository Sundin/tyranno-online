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
  background-color: black;
}

#app {
  font-family: Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0ebe08;
  max-width: 70ch;
  padding: 2ch;
  margin: auto;
}

.bg {
  background-image: url("../assets/background.jpg");

  height: 100%;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  color: #be3c08;
}
a.active {
  color: #be3c08;
}
</style>
