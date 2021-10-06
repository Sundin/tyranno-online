<template>
  <main-layout>
    <h1>Upcoming Gigs</h1>
    <div v-for="gig in getUpcomingGigs()" v-bind:key="gig.date">
      <gig-entry v-bind:item="gig" v-bind:pastgig=false></gig-entry>
    </div>
    <hr />
    <h1>Past Gigs</h1>
    <div v-for="gig in getPastGigs()" v-bind:key="gig.date">
      <gig-entry v-bind:item="gig" v-bind:pastgig=true></gig-entry>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import GigEntry from './Gig.vue';

const gigs = [
  {
    date: '2021-12-05',
    location: 'TBA',
    comment: 'Release ritual',
  },
  {
    date: '2020-10-10',
    location: 'Skyddsrummet, Tolered, Hisingen',
  },
];

const today = new Date().setHours(0);

export default {
  components: {
    MainLayout,
    GigEntry,
  },
  methods: {
    getUpcomingGigs() {
      return gigs
        .filter((gig) => new Date(gig.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    },
    getPastGigs() {
      return gigs
        .filter((gig) => new Date(gig.date) < today)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
};
</script>
