<template>
  <main-layout>
    <h1>Armory Experimentation Lab</h1>
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
