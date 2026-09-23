<template>
  <div class="news-entry">
    <time :datetime="item.date">{{ item.date }}</time>
    <h3>{{ item.heading }}</h3>
    <div class="entry-body" v-html="item.body"></div>
    <div v-if="item.image" class="entry-image">
      <img :src="imageUrl(item.image)" :alt="item.heading" loading="lazy" decoding="async">
    </div>
  </div>
</template>

<script>
const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
});

export default {
  name: 'NewsEntry',
  props: {
    item: Object,
  },
  methods: {
    imageUrl(path) {
      return images[`../${path}`];
    },
  },
};
</script>

<style scoped>
.news-entry {
  background: rgba(27, 19, 17, 0.78);
  border: 1px solid var(--line);
  margin: 1rem 0;
  padding: clamp(1.4rem, 4vw, 2.5rem);
}

time {
  color: var(--link-color);
  display: block;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  margin-bottom: 0.8rem;
}

h3 {
  margin-bottom: 1rem;
}

.entry-body :deep(p) {
  color: var(--muted-color);
}

.entry-image img {
  display: block;
  margin-top: 1.5rem;
  max-height: 680px;
  object-fit: cover;
  width: 100%;
}
</style>
