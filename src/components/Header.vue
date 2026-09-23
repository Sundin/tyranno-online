<template>
  <header class="header">
    <nav class="navbar" aria-label="Main navigation">
      <div class="links left">
        <v-link href="/news">News</v-link>
        <v-link href="/tour">Tour</v-link>
      </div>
      <v-link class="brand" href="/" aria-label="Tyrannosatan home">
        <img alt="Tyrannosatan" class="logo" src="../assets/logo.png">
      </v-link>
      <div class="links right">
        <v-link href="/merch">Merch</v-link>
        <v-link href="/about">About</v-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import VLink from './VLink.vue';
</script>

<style scoped>
.header { padding: 0.75rem 1rem 0; }

.navbar {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr minmax(230px, 390px) 1fr;
  margin: 0 auto;
  max-width: 980px;
}

.brand { line-height: 0; }

.logo {
  display: block;
  margin: auto;
  max-height: 300px;
  object-fit: contain;
  padding: 0.5rem;
  width: 100%;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.left { align-items: flex-end; }
.right { align-items: flex-start; }

.links :deep(a) {
  color: var(--text-color);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(1.7rem, 4vw, 2.5rem);
  line-height: 1.15;
  padding: 0 0.75rem;
}

.links :deep(a.active) { color: var(--link-color); }
.links :deep(a:hover) { color: var(--hover-color); }

@media screen and (max-width: 620px) {
  .navbar { grid-template-columns: 1fr 1fr; }

  .brand {
    grid-column: 1 / -1;
    grid-row: 1;
  }

  .logo {
    max-height: 220px;
    width: min(82vw, 350px);
  }

  .links {
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }

  .links :deep(a) {
    font-size: clamp(1.35rem, 7vw, 2rem);
    padding: 0.35rem;
  }
}
</style>
