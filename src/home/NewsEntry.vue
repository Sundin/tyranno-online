<template>
  <div class="news-entry">
    <h3>{{ item.heading }}</h3>
    <p>
      <i>{{ item.date }}</i>
      <br /><br />
      <span v-html="item.body"></span>
    </p>
    <div v-if=item.image>
        <img :src="require(`@/${item.image}`)" />
    </div>
    <br />
    <hr />
  </div>
</template>

<script>
export default {
  name: 'NewsEntry',
  props: {
    item: Object,
  },
};
</script>

<style scoped>
img {
  max-width: 50%;
}
</style>
