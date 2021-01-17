<template>
  <div class="header">
    <v-link href="/">
      <img alt="Armory logo" class="logo" src="../assets/logo.png">
    </v-link>
    <div class="navbar">
      <v-link href="/">Home</v-link>
      <v-link href="/tour">Tour</v-link>
      <v-link href="/merch">Merch</v-link>
      <v-link href="/fanclub">Fanclub</v-link>
      <v-link href="/about">About</v-link>
    </div>
  </div>
</template>

<script>
import VLink from './VLink.vue';

export default {
  name: 'Header',
  components: {
    VLink,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.navbar {
  width: 100%;
  overflow: auto;
}

.logo {
  padding: 12px;
  max-width: 90%;
}

.navbar a {
  color: var(--text-color);
  padding: 0 20px;
  font-family: Impact, Georgia, serif;
  font-size: 200%;
  font-weight: bold;
  float: center;
}

.navbar a.active {
  color: var(--link-color);
}
.navbar a:hover {
  color: var(--hover-color);
}

@media screen and (max-width: 600px) {
  .navbar a {
    float: none;
    display: block;
    font-size: 30px;
  }
}

</style>
