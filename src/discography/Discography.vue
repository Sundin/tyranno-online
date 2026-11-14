<template>
  <main-layout>
    <header class="page-intro">
      <p class="eyebrow">Recorded rituals · 2017–2025</p>
      <h1>Discography</h1>
      <p>Three transmissions of howling heavy metal fury.</p>
    </header>

    <div class="release-grid">
      <router-link
        v-for="release in releases"
        :key="release.slug"
        class="release-card"
        :to="`/discography/${release.slug}`"
      >
        <span class="cover-frame">
          <img
            :alt="`${release.title} cover`"
            decoding="async"
            :height="release.coverHeight"
            loading="lazy"
            :src="release.cover"
            :width="release.coverWidth"
          />
        </span>
        <span class="release-meta">{{ release.year }} · {{ release.kind }}</span>
        <span class="release-title">{{ release.title }}</span>
        <span class="release-summary">{{ release.summary }}</span>
      </router-link>
    </div>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
import { releases } from './releases';
</script>

<style scoped>
.page-intro { margin: 0 auto 2.5rem; }

.eyebrow,
.release-meta {
  color: #9a8f88;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.release-grid {
  display: grid;
  gap: 2.25rem 1.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  text-align: left;
}

.release-card {
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.cover-frame {
  background: #090707;
  border: 1px solid rgba(190, 60, 8, 0.55);
  box-shadow: 0 0 0 7px rgba(65, 0, 0, 0.25);
  display: block;
  margin: 7px 7px 1.15rem;
  overflow: hidden;
}

.cover-frame img {
  aspect-ratio: 1;
  display: block;
  object-fit: cover;
  transition: filter 160ms ease, transform 160ms ease;
  width: 100%;
}

.release-card:hover .cover-frame img,
.release-card:focus-visible .cover-frame img {
  filter: contrast(1.08) saturate(1.08);
  transform: scale(1.015);
}

.release-title {
  font-size: clamp(1.25rem, 3vw, 1.7rem);
  font-weight: bold;
  line-height: 1.15;
  margin: 0.35rem 0;
}

.release-summary {
  color: #b9afa8;
  font-size: 0.82rem;
  line-height: 1.45;
}

@media screen and (max-width: 620px) {
  .release-grid { grid-template-columns: 1fr; }
}
</style>
