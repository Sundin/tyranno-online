<template>
  <div class="gig-entry">
    <p :class="{ cancelled: item.cancelled }">
      <time :datetime="item.date">{{ item.date }}</time>:
      <template v-if="item.link"><a :href="item.link">{{ item.venue }},</a> {{ item.location }}</template>
      <template v-else>{{ item.location }}</template>
      <template v-if="item.comment"> ({{ item.comment }})</template>
      <template v-if="showTickets"> – <a :href="item.tickets">Tickets</a>.</template>
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  item: { type: Object, required: true },
  pastgig: Boolean,
});

const showTickets = computed(() => !props.pastgig && props.item.tickets);
</script>

<style scoped>
.gig-entry p { margin: 0.7rem 0; }
time { font-weight: bold; }
.cancelled { text-decoration: line-through; }
</style>
