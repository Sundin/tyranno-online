<template>
  <div class="news-entry">
    <h3>{{item.heading}}</h3>
    <p>
      {{item.date}}:
      <span v-html="item.body"></span>
    </p>
    <hr>
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
