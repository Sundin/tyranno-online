
<template>
  <div>
    <h2>{{item.name}}</h2>
    <p>{{item.comment}}</p>
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
.active {
  color: cornflowerblue;
}
</style>
