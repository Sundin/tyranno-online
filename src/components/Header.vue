<template>
  <div class="header">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li>
        <v-link href="/">Home</v-link>
        <v-link href="/tour">Tour</v-link>
        <v-link href="/merch">Merch</v-link>
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
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
  padding: 0 6px;
}
</style>
