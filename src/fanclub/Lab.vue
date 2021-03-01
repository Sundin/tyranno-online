<template>
  <main-layout>
    <h3>Armory Experimentation Lab</h3>
    <p>
      TOP SECRET!
    </p>
    <CommentsSection pageId="test777"/>

  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import CommentsSection from './commentsView/CommentsSection.vue';

export default {
  components: {
    MainLayout,
    CommentsSection,
  },
};
</script>
