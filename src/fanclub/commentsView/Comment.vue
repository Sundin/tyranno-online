
<template>
  <div>
    <h2>{{name}}</h2>
    <p>{{comment}}</p>
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    comment: {
      type: String,
      required: true,
    },
    name: {
      type: String,
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
