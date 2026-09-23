<template>
  <header class="site-header">
    <v-link class="brand" href="/" aria-label="Tyrannosatan home">
      <img alt="Tyrannosatan" class="logo" src="../assets/logo.png">
    </v-link>
    <nav class="navbar" aria-label="Main navigation">
      <v-link href="/news">News</v-link>
      <v-link href="/tour">Tour</v-link>
      <v-link href="/merch">Merch</v-link>
      <v-link href="/about">About</v-link>
    </nav>
  </header>
</template>

<script>
import VLink from './VLink.vue';

export default {
  name: 'SiteHeader',
  components: {
    VLink,
  },
};
</script>

<style scoped>
.site-header {
  align-items: center;
  backdrop-filter: blur(16px);
  background: rgba(11, 8, 8, 0.82);
  border-bottom: 1px solid var(--line);
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding: 0.75rem max(1rem, calc((100vw - 1120px) / 2));
  position: sticky;
  top: 0;
  z-index: 10;
}

.brand {
  display: block;
  flex: 0 1 230px;
  line-height: 0;
}

.logo {
  display: block;
  max-height: 88px;
  object-fit: contain;
  object-position: left center;
  width: min(230px, 38vw);
}

.navbar {
  align-items: center;
  display: flex;
  gap: clamp(0.9rem, 3vw, 2.25rem);
}

.navbar :deep(a) {
  color: var(--muted-color);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.16em;
  padding: 0.65rem 0;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
}

.navbar :deep(a::after) {
  background: var(--link-color);
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 160ms ease;
  width: 100%;
}

.navbar :deep(a.active),
.navbar :deep(a:hover) {
  color: var(--hover-color);
}

.navbar :deep(a.active::after),
.navbar :deep(a:hover::after) {
  transform: scaleX(1);
}

@media screen and (max-width: 680px) {
  .site-header {
    align-items: stretch;
    flex-direction: column;
    gap: 0.25rem;
    padding-bottom: 0;
  }

  .brand {
    align-self: center;
    flex-basis: auto;
  }

  .logo {
    max-height: 72px;
    object-position: center;
    width: 190px;
  }

  .navbar {
    justify-content: space-between;
    overflow-x: auto;
  }

  .navbar :deep(a) {
    font-size: 0.68rem;
  }
}
</style>
