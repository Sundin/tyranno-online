<template>
  <main-layout>
    <h1>News</h1>
    <div v-for="item in getNewsEntries()">
      <news-entry v-bind:item="item"></news-entry>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import NewsEntry from "../components/NewsEntry.vue";

const news = [
  {
    heading: "Metal Magic",
    date: "2019-07-01",
    body: `Soon we will head over to Denmark for our first show there ever. 
    The location will be non other than the legendary Metal Magic Festival in Fredericia on July 11-13th. 
    Our gig is on Friday the 12th, but beware that we will stay for the whole festival and have a wild time with everyone! See you there! <br>
    <a href="http://metal-magic.dk/">Read more and get your tickets here!</a>`
  },
  {
    heading: "Noselake Metal Festival",
    date: "2019-05-25",
    body: `On June the 28th we will return once more to Småland, 
    this time to lay waste to the town of Nässjö at Noselake Metal Festival. 
    Two days of heavy metal with many killer bands!<br>
    <a href="https://secure.tickster.com/sv/wz6ztumev1t8wyu/products">Get your tickets here!</a>`
  },
  {
    heading: "Armory Online",
    date: "2019-05-17",
    body: "Website launched."
  },
  {
    heading: "Music Video",
    date: "2018-10-04",
    body: `Our first music video is out now! The song is <span class="title">Vault Seven</span> from our latest album <span class="title">The Search</span>, out now through High Roller Records.
      The video was directed by the mighty Jim Nedergård and is a dark story about invisible enemies, paranoia and the dangerous power of knowledge.
     <br><a href="https://www.youtube.com/watch?v=UYj3EnEON8k">Watch it here!</a>`
  },
  {
    heading: "The Search Out Today!",
    date: "2018-07-13",
    body:
      'It is Friday the 13th and our second full-length album <span class="title">The Search</span> is released today by High Roller Records!'
  }
];

const today = new Date().setHours(24);

export default {
  components: {
    MainLayout,
    NewsEntry
  },
  methods: {
    getNewsEntries() {
      return news.filter(entry => new Date(entry.date) <= today);
    }
  }
};
</script>
