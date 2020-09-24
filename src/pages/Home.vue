<template>
  <main-layout>
    <h1>News</h1>
    <div v-for="item in getNewsEntries()" v-bind:key="item.date">
      <news-entry v-bind:item="item"></news-entry>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import NewsEntry from '../components/NewsEntry.vue';

const news = [
  {
    heading: 'Upcoming Album And Live Gigs!',
    date: '2020-09-20',
    body: `Greetings Marauders! 
    You haven't heard from us in a while... 
    That is because we have been busy writing our new album! 
    It will be a concept album and will be recorded early next year.
    To wet your appetite though, we have decided to do a small tour this November and play the upcoming album in its enterity!!!
    Go to the <a href="https://www.armory.se/tour">TOUR</a> section to see all the upcoming dates.
    Stay fast!`,
  },
  {
    heading: 'A Message From Space',
    date: '2020-04-10',
    body: `Unfortunately but not surprisingly our gig at The Abyss together with Ambush has been postponed to an unknown date.
    As all of our concerts are either cancelled or postponed, we stand without income at the moment.
    If you would like to show your support you can join our fanclub for just 100 SEK and you will get a killer fanclub package in return.
    <p><a href="https://www.jawbreaker.se/product/space-marauders-membership/">Follow this hyperlink to read more</a>.`,
  },
  {
    heading: 'Space Marauders 2020',
    date: '2020-03-22',
    body: `The 2020 edition of the Space Marauders, also known as the fastest fanclub in the known universe, is now open for registration.
    As usual, membership is only 100 SEK and included in the price is a very special gift.
    We know we say this every year, but this year's secret will be something extraordinary indeed!
    If you are ready to step into the unknown,
    <a href="https://www.jawbreaker.se/product/space-marauders-membership/">follow this hyperlink</a>.`,
  },
  {
    heading: 'Outbreak of Evil',
    date: '2020-03-20',
    body: `Unfortunately our gig with Darkness on 2020-04-04 has been cancelled due to the current quarantine situation on Sol III.
    Our gig with Ambush in Gothenburg on 2020-04-17 is still on though so make sure to get your tickets <a href="https://www.tickster.com/sv/events/avbm5ce4l51ue7g/2020-04-17/ambush-armory">here</a>!`,
  },
  {
    heading: '4/17',
    date: '2020-03-01',
    body: `This year we are gonna celebrate the official speed metal island day (April 17th or 4/17) at The Abyss 
    in Gothenburg together with reigning heavy metal champions Ambush from Småland.
    Ambush are in turn celebrating the release of their third album "Infidel", out on High Roller Records, so this will be a night to remember.
    The gig is expected to sell out to make sure to get your tickets in advance.
    <p>
    <a href="https://www.tickster.com/sv/events/avbm5ce4l51ue7g/2020-04-17/ambush-armory">Tickets available here.</a>`,
  },
  {
    heading: 'We are opening for DARKNESS!',
    date: '2019-11-29',
    body: `On the 4th of April 2020 we will return to Jönköping, Småland together with the mighty DARKNESS from Germany. See you there speedfreekz!
    <p>
    <a href="https://www.tickster.com/sv/events/12jmb53emx4wfw2/2020-04-04/darkness-armory-klubb-dissonans">Read more and get your tickets here!</a>`,
  },
  {
    heading: 'Metal Magic',
    date: '2019-07-01',
    body: `Soon we will head over to Denmark for our first show on Danish ground ever. 
    The location will be non other than the legendary Metal Magic Festival in Fredericia on July 11-13th. 
    Our gig is on Friday the 12th, but beware that we will stay for the whole festival and have a wild time with everyone! See you there!
    <p>
    <a href="http://metal-magic.dk/">Read more and get your tickets here!</a>`,
  },
  {
    heading: 'Noselake Metal Festival',
    date: '2019-05-25',
    body: `On June the 28th we will return once more to Småland, 
    this time to lay waste to the town of Nässjö at Noselake Metal Festival. 
    Two days of heavy metal with many killer bands!<br>
    <a href="https://secure.tickster.com/sv/wz6ztumev1t8wyu/products">Get your tickets here!</a>`,
  },
  {
    heading: 'Armory Online',
    date: '2019-05-17',
    body: 'Website launched.',
  },
  {
    heading: 'Music Video',
    date: '2018-10-04',
    body: `Our first music video is out now! The song is <span class="title">Vault Seven</span> from our latest album <span class="title">The Search</span>, out now through High Roller Records.
      The video was directed by the mighty Jim Nedergård and is a dark story about invisible enemies, paranoia and the dangerous power of knowledge.
      <p><a href="https://www.youtube.com/watch?v=UYj3EnEON8k">Watch it here!</a>`,
  },
  {
    heading: 'The Search Out Today!',
    date: '2018-07-13',
    body:
      'It is Friday the 13th and our second full-length album <span class="title">The Search</span> is released today by High Roller Records!',
  },
];

const today = new Date().setHours(24);

export default {
  components: {
    MainLayout,
    NewsEntry,
  },
  methods: {
    getNewsEntries() {
      return news.filter((entry) => new Date(entry.date) <= today);
    },
  },
};
</script>
