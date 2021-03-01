
<template>
  <div class="comment">
    <h2>{{item.name}}:</h2>
    <i>({{new Date(item.createdAt).toLocaleString()}})</i>
    <p>
      <span v-html="item.comment"></span>
    </p>
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute;
    },
  },
  methods: {
    go() {

    },
  },
};
</script>

<style scoped>
div.comment {
  background-color: #472000;
  color: var(--text-color);
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid var(--text-color);
  padding: px 5px;
  margin: 15px 15px;
  font-family: Georgia, serif;
  outline: none;
  opacity: 0.8;
}
</style>
