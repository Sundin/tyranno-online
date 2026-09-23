<template>
  <article class="news-entry">
    <h3>{{ item.heading }}</h3>
    <time :datetime="item.date">{{ item.date }}</time>
    <div class="entry-body" v-html="item.body"></div>
    <img v-if="item.image" :src="imageUrl(item.image)" :alt="item.heading" loading="lazy" decoding="async">
    <hr>
  </article>
</template>

<script setup>
const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
});

defineProps({ item: { type: Object, required: true } });
const imageUrl = (path) => images[`../${path}`];
</script>

<style scoped>
.news-entry { padding-top: 0.5rem; }

time {
  color: #9a8f88;
  display: block;
  font-size: 0.78em;
  font-style: italic;
  margin-bottom: 1rem;
}

.entry-body :deep(p) {
  margin-inline: auto;
  max-width: 60ch;
}

img {
  margin-top: 1rem;
  max-width: min(100%, 520px);
}
</style>
