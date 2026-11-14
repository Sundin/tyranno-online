<template>
  <main-layout>
    <article v-if="release" class="release">
      <router-link class="back-link" to="/discography">← All releases</router-link>

      <header class="release-header">
        <p class="eyebrow">{{ release.year }} · {{ release.kind }}</p>
        <h1>{{ release.title }}</h1>
        <p class="summary">{{ release.summary }}</p>
      </header>

      <div class="release-hero">
        <img
          :alt="`${release.title} cover`"
          class="cover"
          decoding="async"
          :height="release.coverHeight"
          :src="release.cover"
          :width="release.coverWidth"
        />

        <dl class="facts">
          <div><dt>Released</dt><dd>{{ release.date }}</dd></div>
          <div><dt>Label</dt><dd>{{ release.label }}</dd></div>
          <div v-if="release.catalog"><dt>Catalog</dt><dd>{{ release.catalog }}</dd></div>
          <div><dt>Format</dt><dd>{{ release.formats }}</dd></div>
          <div v-if="release.edition"><dt>Edition</dt><dd>{{ release.edition }}</dd></div>
          <div><dt>Running time</dt><dd>{{ release.duration }}</dd></div>
        </dl>
      </div>

      <p class="description">{{ release.description }}</p>

      <nav v-if="release.links.length" class="release-links" aria-label="Release links">
        <a
          v-for="link in release.links"
          :key="link.url"
          :href="link.url"
          rel="noopener"
          target="_blank"
        >{{ link.label }}</a>
      </nav>

      <section>
        <h2>Tracklist</h2>
        <ol class="tracklist">
          <li v-for="track in release.tracks" :key="track.title">
            <span>
              {{ track.title }}
              <small v-if="track.translation">({{ track.translation }})</small>
            </span>
            <time>{{ track.duration }}</time>
          </li>
        </ol>
      </section>

      <div class="credits-grid">
        <section>
          <h2>Lineup</h2>
          <ul>
            <li v-for="member in release.lineup" :key="member">{{ member }}</li>
          </ul>
        </section>
        <section>
          <h2>Credits</h2>
          <ul>
            <li v-for="credit in release.credits" :key="credit">{{ credit }}</li>
          </ul>
        </section>
      </div>

      <section v-if="release.reviews" class="reviews">
        <h2>What do the fans have to say?</h2>
        <blockquote v-for="review in release.reviews" :key="review.quote">
          “{{ review.quote }}”
          <cite>
            <a v-if="review.url" :href="review.url" rel="noopener" target="_blank">{{ review.cite }}</a>
            <template v-else>{{ review.cite }}</template>
          </cite>
        </blockquote>
      </section>

      <footer class="sources">
        <strong>Release sources:</strong>
        <a
          v-for="source in release.sources"
          :key="source.url"
          :href="source.url"
          rel="noopener"
          target="_blank"
        >{{ source.label }}</a>
      </footer>
    </article>

    <section v-else class="missing-release">
      <h1>Release not found</h1>
      <p><router-link to="/discography">Return to the discography.</router-link></p>
    </section>
  </main-layout>
</template>

<script setup>
import { computed } from 'vue';
import MainLayout from '../layouts/Main.vue';
import { releaseBySlug } from './releases';

const props = defineProps({
  slug: { type: String, required: true },
});

const release = computed(() => releaseBySlug(props.slug));
</script>

<style scoped>
.release { text-align: left; }
.back-link { display: inline-block; margin: 0.5rem 0 1rem; }
.release-header { text-align: center; }

.eyebrow {
  color: #9a8f88;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.summary {
  font-size: 1.08rem;
  margin: -0.25rem auto 2rem;
  max-width: 52ch;
}

.release-hero {
  align-items: start;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 1.2fr) minmax(12rem, 0.8fr);
}

.cover {
  aspect-ratio: 1;
  border: 1px solid rgba(190, 60, 8, 0.55);
  box-shadow: 0 0 0 7px rgba(65, 0, 0, 0.25);
  display: block;
  object-fit: cover;
  width: 100%;
}

.facts { margin: 0; }

.facts div {
  border-bottom: 1px solid rgba(190, 60, 8, 0.25);
  padding: 0.2rem 0 0.75rem;
}

.facts dt {
  color: #9a8f88;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  margin-top: 0.55rem;
  text-transform: uppercase;
}

.facts dd { margin: 0.15rem 0 0; }
.description { font-size: 1.05rem; margin: 2rem auto; max-width: 62ch; text-align: center; }

.release-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.release-links a {
  background: var(--dark-red);
  border: 1px solid var(--text-color);
  padding: 0.55rem 0.8rem;
  text-decoration: none;
}

.release h2 {
  border-bottom: 1px solid rgba(190, 60, 8, 0.45);
  margin-top: 2.5rem;
  padding-bottom: 0.4rem;
}

.tracklist { padding-left: 2rem; }

.tracklist li {
  border-bottom: 1px dotted rgba(190, 60, 8, 0.25);
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr auto;
  padding: 0.45rem 0 0.45rem 0.25rem;
}

.tracklist small { color: #9a8f88; display: block; }
.tracklist time { color: #9a8f88; font-variant-numeric: tabular-nums; }

.credits-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.credits-grid ul { list-style: none; padding: 0; }

.reviews { text-align: center; }

blockquote {
  font-style: italic;
  line-height: 1.55;
  margin: 0 auto;
  max-width: 58ch;
  padding: 1.1rem 0;
}

cite {
  color: #9a8f88;
  display: block;
  font-size: 0.75em;
  font-style: normal;
  margin-top: 0.5rem;
}

.sources {
  border-top: 1px solid rgba(190, 60, 8, 0.45);
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.8rem;
  margin-top: 2.5rem;
  padding-top: 1rem;
}

.sources strong { width: 100%; }
.missing-release { text-align: center; }

@media screen and (max-width: 680px) {
  .release-hero,
  .credits-grid { grid-template-columns: 1fr; }
}
</style>
