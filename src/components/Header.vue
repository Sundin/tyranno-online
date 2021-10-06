<template>
  <div class="header">
    <div class="navbar">
      <div class="links left">
        <v-link href="/">Home</v-link>
        <v-link href="/tour">Tour</v-link>
      </div>
      <div class="links">
        <v-link href="/">
          <img alt="Armory logo" class="logo" src="../assets/logo.png">
        </v-link>
      </div>
      <div class="links right">
        <v-link href="/merch">Merch</v-link>
        <v-link href="/about">About</v-link>
      </div>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.links {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.left{
  align-items: end;
}
.right{
  align-items: start;
}

.logo {
  padding: 12px;
  /* max-width: 20%; */
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
  .navbar {
    flex-direction: column;
  }
  .left{
    align-items: center;
    order: 5;
  }
  .right{
    align-items: center;
    order: 6;
  }

  .navbar a {
    float: none;
    display: block;
    font-size: 30px;
  }
}

</style>
