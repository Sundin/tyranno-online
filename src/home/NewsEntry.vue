<template>
  <div class="news-entry">
    <h3>{{ item.heading }}</h3>
    <p>
      <i>{{ item.date }}</i>
      <br /><br />
      <span v-html="item.body"></span>
    </p>
    <div v-if=item.image>
        <img :src="imageUrl(item.image)" />
    </div>
    <br />
    <hr />
  </div>
</template>

<script>
const images = import.meta.glob('../assets/**/*', {
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
img {
  max-width: 50%;
}
</style>
