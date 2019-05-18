<template>
  <div class="gig-entry">
    <p>{{item.date}}: {{item.location}} {{item.comment}}</p>
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
