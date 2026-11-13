<template>
  <main-layout>
    <h1>Upcoming Rituals</h1>
    <p v-if="upcoming.length === 0">No rituals announced. Watch this space.</p>
    <div v-for="gig in upcoming" :key="gig.date">
      <gig-entry :item="gig" :pastgig="false"></gig-entry>
    </div>
    <hr />
    <h1>Past Rituals</h1>
    <div v-for="gig in past" :key="gig.date">
      <gig-entry :item="gig" :pastgig="true"></gig-entry>
    </div>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
import { partitionEvents } from '../lib/content';
import GigEntry from './Gig.vue';

const gigs = [
  {
    date: '2026-05-28',
    location: 'Tyrolen, Blädinge',
    comment: 'Muskelrock',
  },
  {
    date: '2025-11-28',
    location: 'Monument 031, Gothenburg',
    comment: 'The Abyss Festival',
  },
  {
    date: '2025-07-11',
    location: 'Fredericia, Denmark',
    comment: 'Metal Magic Festival',
  },
  {
    date: '2022-04-30',
    location: 'Fredericia, Denmark',
    comment: 'Metal Magic Warmup',
  },
  {
    date: '2022-02-26',
    location: 'The Abyss, Goatenburg',
    comment: 'Release ritual for Katakombernas Kakofoni',
  },
  {
    date: '2020-10-10',
    location: 'Skyddsrummet, Tolered, Hisingen',
  },
];

const { upcoming, past } = partitionEvents(gigs);
</script>
