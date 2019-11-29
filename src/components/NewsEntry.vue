<template>
  <div class="news-entry">
    <h3>{{ item.heading }}</h3>
    <p>
      <i>{{ item.date }}</i>
      <br /><br />
      <span v-html="item.body"></span>
    </p>
    <br />
    <hr />
  </div>
</template>

<script>
export default {
  name: "NewsEntry",
  props: {
    item: Object
  }
};
</script>
