
<template>
  <router-link :to="href" active-class="active" exact-active-class="active">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.active {
  color: cornflowerblue;
}
</style>
