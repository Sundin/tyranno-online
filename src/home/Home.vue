<template>
  <main-layout>
    <h1>Katakombernas Kakofoni</h1>
    <p class="intro">Tyrannosatan's ripping debut LP.</p>
    <p>
      Order from
      <a href="https://www.jawbreaker.se/product-tag/tyrannosatan/" target="_blank" rel="noopener">Jawbreaker Records</a>!
    </p>
    <h2>Out Now!</h2>
    <a class="album" href="https://www.jawbreaker.se/product-tag/tyrannosatan/" target="_blank" rel="noopener">
      <img alt="Katakombernas Kakofoni album cover" src="../assets/tyrannosatan katakombernas kakofoni.png">
    </a>

    <section class="reviews">
      <h2>What do the fans have to say?</h2>
      <blockquote>“It's a thunderous, raw and absolute ripper of an album and an instant favourite of mine!!”<cite>Paul Holland, UK</cite></blockquote>
      <blockquote>“A completely bonkers album. A vile piece of black metal with maces, morning stars, swords, axes and all sorts of weapons swung above the head.”<cite>tr00makrel, Denmark</cite></blockquote>
      <blockquote>“It's early in the year but this is one of my favourites already—raw, thunderous and old school!”<cite>__deathdigital__</cite></blockquote>
      <blockquote>“Your band sounds good, a mix of styles in a METAL way!”<cite>Jorge / Mina de Aço, Portugal</cite></blockquote>
      <blockquote>“Unrelenting blackened death thrash!!”<cite>Chris, <a href="https://mercenarypress.bandcamp.com/">Mercenary Press</a> / Inhuman Nature, UK</cite></blockquote>
      <blockquote>“Tyrannosatan know how to rock hard, connecting to your reptile brain and making your head pump and your pulse pound.”<cite><a href="https://www.nocleansinging.com/2022/08/15/seen-and-heard-aphonic-threnody-tyrannosatan-ammanas/">No Clean Singing</a></cite></blockquote>
    </section>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
</script>

<style scoped>
.intro { font-size: 1.12em; }

.album {
  display: block;
  margin: 1.5rem auto 3.5rem;
  max-width: 780px;
}

.album img {
  display: block;
  filter: contrast(1.04) saturate(0.92);
  width: 100%;
}

.reviews {
  border-top: 1px solid rgba(190, 60, 8, 0.55);
  padding-top: 1rem;
}

blockquote {
  font-style: italic;
  line-height: 1.55;
  margin: 0 auto;
  max-width: 58ch;
  padding: 1.2rem 0;
}

blockquote::after {
  color: rgba(190, 60, 8, 0.65);
  content: "†";
  display: block;
  font-style: normal;
  margin-top: 1.2rem;
}

blockquote:last-child::after { content: ""; }

cite {
  color: #9a8f88;
  display: block;
  font-size: 0.75em;
  font-style: normal;
  margin-top: 0.5rem;
}
</style>
