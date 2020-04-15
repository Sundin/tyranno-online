<template>
  <div class="gig-entry">
    <p v-bind:class="{ cancelled: item.cancelled }">
      {{ item.date }}:
      <template v-if="item.link">
        <a :href="item.link">{{ item.venue }},</a>
        {{ item.location }}
      </template>
      <template v-else>{{ item.location }}</template>
      <template v-if="item.comment"> ({{ item.comment }})</template>
      <template v-if="showTickets">
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
    pastgig: Boolean,
  },
  computed: {
    showTickets() {
      return !this.pastgig && this.item.tickets;
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cancelled {
  text-decoration: line-through;
}

</style>
