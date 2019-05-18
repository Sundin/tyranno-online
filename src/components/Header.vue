<template>
  <div class="header">
    <v-link href="/">
      <img alt="Armory logo" src="../assets/logo.png">
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
import VLink from "./VLink.vue";

export default {
  name: "Header",
  components: {
    VLink
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 100%;
  height: auto;
}

.navbar {
  width: 100%;
  overflow: auto;
}

@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
  }
}

a {
  color: var(--text-color);
  padding: 0 20px;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 30px;
}

a.active {
  color: var(--link-color);
}
</style>
