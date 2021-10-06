<template>
  <main-layout>
    <!-- <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
    <h1>News <a href="/feed.xml"><img alt="RSS" class="rss" src="../assets/rss.png"></a></h1>
    <div v-for="item in getNewsEntries()" v-bind:key="item.date">
      <news-entry v-bind:item="item"></news-entry>
    </div>
    <button v-if="currentPage !== numberOfPages" v-on:click="olderNews()">
      Older news
    </button>
    <button  v-if="currentPage !== 0" v-on:click="newerNews()">
      Newer news
    </button>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import NewsEntry from './NewsEntry.vue';
import news from './news.json';

const today = new Date().setHours(24);
const pageSize = 4;

export default {
  components: {
    MainLayout,
    NewsEntry,
  },
  methods: {
    getNewsEntries() {
      return news
        .filter((entry) => new Date(entry.date) <= today)
        .slice(this.currentPage * pageSize, this.currentPage * pageSize + pageSize);
    },
    olderNews() {
      this.currentPage += 1;
    },
    newerNews() {
      this.currentPage -= 1;
    },
  },
  data() {
    return {
      currentPage: 0,
    };
  },
  computed: {
    numberOfPages() {
      return Math.floor(news.length / pageSize);
    },
  },
};
</script>

<style scoped>
.rss {
  width: 25px;
}
</style>
