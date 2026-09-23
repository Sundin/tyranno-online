
<template>
  <router-link :to="href" active-class="active" exact-active-class="active">
    <slot></slot>
  </router-link>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
