<template>
  <div class="gig-entry">
    <p>
      {{item.date}}: {{item.location}}
      <template v-if="item.comment">({{item.comment}})</template>
      <template v-if="item.tickets">
        –
        <a :href="item.tickets">Tickets</a>.
      </template>
    </p>
  </div>
</template>

<script>
export default {
  name: "GigEntry",
  props: {
    item: Object
  }
};
</script>
