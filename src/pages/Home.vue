<template>
  <main-layout>
    <h1>News</h1>
    <div v-for="item in getNewsEntries()">
      <news-entry v-bind:item="item"></news-entry>
    </div>
  </main-layout>
</template>

<script>
const news = [
  {
    heading: "Armory Online",
    date: "2019-05-17",
    body: "Website launched."
  },
  {
    heading: "Music Video",
    date: "2018-10-04",
    body: `Our first music video is out now! The song is "Vault Seven" from our latest album "The Search", out now through High Roller Records.
      The video was directed by the mighty Jim Nedergård and is a dark story about invisable enemies, paranoia and the dangerous power of knowledge.
     <a href="https://www.youtube.com/watch?v=UYj3EnEON8k">Watch it here!</a>`
  },
  {
    heading: "The Search Out Today!",
    date: "2018-07-13",
    body: `It is Friday the 13th and our second full-length album "The Search" is released today by High Roller Records!`
  }
];

import MainLayout from "../layouts/Main.vue";
import NewsEntry from "../components/NewsEntry.vue";

let today = new Date().setHours(24);

export default {
  components: {
    MainLayout,
    NewsEntry
  },
  methods: {
    getNewsEntries: function() {
      return news.filter(entry => new Date(entry.date) <= today);
    }
  }
};
</script>