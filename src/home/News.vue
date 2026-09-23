<template>
  <main-layout>
    <!-- <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
    <h1>News <a href="/feed.xml"><img alt="RSS" class="rss" src="../assets/rss.png"></a></h1>
    <div v-for="item in page.items" :key="item.date">
      <news-entry :item="item"></news-entry>
    </div>
    <button v-if="page.page < page.pageCount - 1" @click="currentPage += 1">
      Older news
    </button>
    <button v-if="page.page > 0" @click="currentPage -= 1">
      Newer news
    </button>
  </main-layout>
</template>

<script setup>
import { computed, ref } from 'vue';
import MainLayout from '../layouts/Main.vue';
import NewsEntry from './NewsEntry.vue';
import news from './news.json';
import { paginate, publishedEntries } from '../lib/content';

const pageSize = 4;
const currentPage = ref(0);
const entries = publishedEntries(news);
const page = computed(() => paginate(entries, currentPage.value, pageSize));
</script>

<style scoped>
.rss {
  width: 25px;
}
</style>
