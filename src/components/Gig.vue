<template>
  <div class="gig-entry">
    <p>
      {{ item.date }}:
      <template v-if="item.link">
        <a :href="item.link">{{ item.venue }},</a>
        {{ item.location }}
      </template>
      <template v-else>{{ item.location }}</template>
      <template v-if="item.comment"> ({{ item.comment }})</template>
      <template v-if="item.tickets">
        –
        <a :href="item.tickets">Tickets</a>.
      </template>
    </p>
  </div>
</template>

<script>
export default {
  name: 'GigEntry',
  props: {
    item: Object,
  },
};
</script>
