<template>
  <main-layout>
    <h1>Upcoming Gigs</h1>
    <div v-for="item in getUpcomingGigs()">
      <gig-entry v-bind:item="item"></gig-entry>
    </div>
    <hr />
    <h1>Past Gigs</h1>
    <div v-for="item in getPastGigs()">
      <gig-entry v-bind:item="item"></gig-entry>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import GigEntry from '../components/Gig.vue';

const gigs = [
  {
    date: '2020-04-04',
    location: 'Klubb Dissonans, Jönköping, Sweden',
    comment: 'Opening for DARKNESS',
    tickets:
      'https://www.tickster.com/sv/events/12jmb53emx4wfw2/2020-04-04/darkness-armory-klubb-dissonans',
  },
  {
    date: '2019-06-28',
    venue: 'Noselake Metal Festival',
    location: 'Nässjö, Sweden',
    link: 'https://noselakemetalfestival.se/',
    tickets: 'https://secure.tickster.com/sv/wz6ztumev1t8wyu/products',
  },
  {
    date: '2019-07-12',
    venue: 'Metal Magic Festival',
    location: 'Fredericia, Denmark',
    link: 'http://metal-magic.dk/',
    tickets:
      'https://billetto.dk/e/metal-magic-festival-part-xii-billetter-322346?fbclid=IwAR0W_lAyDNbLSyW7frcsFTZu8NeZc7pyrwZqiFVGR09aSmxDS2W8FK02bFU',
  },
  {
    date: '2019-05-04',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
    comment: 'cancelled Agent Steel gig',
  },
  {
    date: '2019-03-10',
    location: 'Bambi Galore, Hamburg, Germany',
  },
  {
    date: '2019-03-09',
    location: 'Club Ragnarok, Bree, Belgium',
  },
  {
    date: '2019-03-08',
    location: 'MTS, Oldenburg, Germany',
  },
  {
    date: '2018-10-20',
    location: 'Plan B, Malmö, Sweden',
  },
  {
    date: '2018-07-28',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
    comment: 'releaseparty for The Search',
  },
  {
    date: '2018-06-02',
    location: 'Muskelrock, Blädinge, Sweden',
  },
  {
    date: '2018-03-03',
    location: 'Turbofest, Ljungby, Sweden',
  },
  {
    date: '2017-09-29',
    location: 'Huskvarna Rock & Art, Huskvarna, Sweden',
  },
  {
    date: '2017-06-16',
    location: 'The Abyss, Gothenburg, Sweden',
  },
  {
    date: '2017-06-10',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
  },
  {
    date: '2017-04-29',
    location: 'Gothenburg Rockfest, Sweden',
  },
  {
    date: '2017-02-18',
    location: 'Klubb Ostronet, Gothenburg, Sweden',
  },
  {
    date: '2017-02-17',
    location: 'Club Abraxas, Malmö, Sweden',
  },
  {
    date: '2016-11-19',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
  },
  {
    date: '2016-09-03',
    location: 'Copperfields, Stockholm, Sweden',
  },
  {
    date: '2016-08-26',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
    comment: 'releaseparty for World Peace... Cosmic War',
  },
  {
    date: '2016-05-21',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
    comment: 'releaseparty for Critical Mass Vol. 3',
  },
  {
    date: '2016-03-12',
    location: 'Pokalen, Oslo, Norway',
  },
  {
    date: '2015-10-31',
    location: 'Belsepub, Gothenburg, Sweden',
  },
  {
    date: '2015-09-12',
    location: 'Blood & Meat Fest, Vedum, Sweden',
  },
  {
    date: '2015-06-27',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
  },
  {
    date: '2015-05-16',
    location: "Röde Orm biker's club, Götene, Sweden",
    comment: 'secret gig',
  },
  {
    date: '2014-09-27',
    location: 'Belsepub, Gothenburg, Sweden',
  },
  {
    date: '2014-05-07',
    location: 'Sticky Fingers, Gothenburg, Sweden',
  },
  {
    date: '2014-03-29',
    location: 'Kryptan, Växjö, Sweden',
  },
  {
    date: '2013-04-27',
    location: 'Brygghuset, Borås, Sweden',
  },
  {
    date: '2012-10-13',
    location: 'Verket, Umeå, Sweden',
  },
  {
    date: '2012-10-12',
    location: 'Sliperiet, Örnsköldsvik, Sweden',
  },
  {
    date: '2012-10-06',
    location: 'Stenhuset, Gothenburg, Sweden',
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
      return gigs.filter((gig) => new Date(gig.date) >= today);
    },
    getPastGigs() {
      return gigs.filter((gig) => new Date(gig.date) < today);
    },
  },
};
</script>
