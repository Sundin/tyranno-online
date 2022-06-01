<template>
  <main-layout>
    <!-- <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
    <h1>Scorching Metal!</h1>
    <p>Tyrannosatan's ripping debut LP.</p>

<div class="container">
  <div class="lp"></div>
    <h2>Out Now!</h2>
    <a href="https://www.jawbreaker.se/product-tag/tyrannosatan/" target="_blank">
      <img alt="Katekombernas Kakofoni" src="../assets/tyrannosatan katakombernas kakofoni.png" />
    </a>
</div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';

export default {
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
.rss {
  width: 25px;
}

.container{
  flex: auto;
}

.lp {
  width: 25%;
}

img {
  width: 500px;
  max-width: 80%;
}

a {
  color: #9b0f0f;
}

a:hover {
  color: #ad1a1a;
}
</style>
