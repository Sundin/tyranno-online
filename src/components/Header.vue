<template>
  <div class="header">
    <v-link href="/">
      <img alt="Armory logo" src="../assets/logo.png">
    </v-link>
    <ul>
      <li>
        <v-link href="/">Home</v-link>
        <v-link href="/tour">Tour</v-link>
        <v-link href="/merch">Merch</v-link>
        <v-link href="/fanclub">Fanclub</v-link>
        <v-link href="/about">About</v-link>
      </li>
    </ul>
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
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
