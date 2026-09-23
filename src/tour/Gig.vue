<template>
  <div class="gig-entry">
    <p v-bind:class="{ cancelled: item.cancelled }">
      <time :datetime="item.date">{{ item.date }}</time>
      <span class="gig-details">
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
      </span>
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


<style scoped>
.gig-entry {
  border-bottom: 1px solid var(--line);
}

.gig-entry p {
  align-items: baseline;
  display: grid;
  gap: 1rem;
  grid-template-columns: 8rem 1fr;
  margin: 0;
  padding: 1.15rem 0;
}

time {
  color: var(--link-color);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.cancelled {
  text-decoration: line-through;
}

@media screen and (max-width: 560px) {
  .gig-entry p {
    gap: 0.25rem;
    grid-template-columns: 1fr;
  }
}
</style>
