<template>
  <div class="bg">
    <div id="app">
      <Header/>
      <div id="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
  },
};
</script>

<style>
:root {
  --text-color: #0ebe08;
  --link-color: #be3c08;
  --hover-color: #ffffff;
}

body,
html {
  height: 100%;
  background-color: black;
}

#app {
  font-family: Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}

#content {
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
  color: var(--link-color);
}
a.active {
  color: var(--link-color);
}
a:hover {
  color: var(--hover-color);
}

img {
  max-width: 100%;
  height: auto;
}

hr {
  width: 50%;
  color: var(--text-color);
}
</style>
