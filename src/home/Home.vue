<template>
  <main-layout>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Blackened heavy metal · Hisingen</p>
        <h1>Katakombernas<br><span>Kakofoni</span></h1>
        <p class="lead">A feral debut forged in the plague-ridden catacombs of Gothenburg.</p>
        <div class="actions">
          <a class="primary-action" href="https://www.jawbreaker.se/product-tag/tyrannosatan/" target="_blank" rel="noopener">Order the record</a>
          <v-link class="secondary-action" href="/about">Enter the catacombs</v-link>
        </div>
      </div>
      <a class="album" href="https://www.jawbreaker.se/product-tag/tyrannosatan/" target="_blank" rel="noopener">
        <span class="album-label">Debut LP · Out now</span>
        <img alt="Katakombernas Kakofoni album cover" src="../assets/tyrannosatan katakombernas kakofoni.png">
      </a>
    </section>

    <section class="reception">
      <div class="section-heading">
        <p class="eyebrow">Words from above ground</p>
        <h2>Unholy praise</h2>
      </div>
      <div class="quotes">
        <blockquote>
          <p>“A thunderous, raw and absolute ripper of an album and an instant favourite of mine.”</p>
          <cite>Paul Holland · UK</cite>
        </blockquote>
        <blockquote>
          <p>“A vile piece of black metal with maces, morning stars, swords, axes and all sorts of weapons swung above the head.”</p>
          <cite>tr00makrel · Denmark</cite>
        </blockquote>
        <blockquote class="featured-quote">
          <p>“Raw, thunderous and old school. Tyrannosatan connect to your reptile brain and make your pulse pound.”</p>
          <cite><a href="https://www.nocleansinging.com/2022/08/15/seen-and-heard-aphonic-threnody-tyrannosatan-ammanas/">No Clean Singing</a></cite>
        </blockquote>
      </div>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import VLink from '../components/VLink.vue';

export default {
  components: {
    MainLayout,
    VLink,
  },
};
</script>

<style scoped>
.hero {
  align-items: center;
  display: grid;
  gap: clamp(2.5rem, 7vw, 6rem);
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  min-height: 68vh;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.eyebrow {
  color: var(--link-color);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  margin: 0 0 1.4rem;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(3.5rem, 8vw, 6.8rem);
  margin-bottom: 0.2em;
  text-shadow: 0 0.1em 0.4em rgba(0, 0, 0, 0.82);
  width: 135%;
}

h1 span {
  -webkit-text-stroke: 1px rgba(242, 233, 223, 0.72);
  color: transparent;
}

.lead {
  color: var(--muted-color);
  font-family: Georgia, serif;
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  max-width: 30rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
}

.actions :deep(a) {
  border: 1px solid var(--link-color);
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: 900;
  justify-content: center;
  letter-spacing: 0.12em;
  padding: 1rem 1.25rem;
  text-decoration: none;
  text-transform: uppercase;
}

.primary-action {
  background: var(--link-color);
  color: #130b09;
}

.primary-action:hover {
  background: var(--hover-color);
  color: #130b09;
}

.secondary-action {
  background: transparent;
}

.album {
  display: block;
  line-height: 0;
  position: relative;
}

.album::before {
  border: 1px solid var(--line);
  content: "";
  inset: 1.25rem -1.25rem -1.25rem 1.25rem;
  position: absolute;
  transition: inset 180ms ease;
  z-index: -1;
}

.album:hover::before {
  inset: 0.8rem -0.8rem -0.8rem 0.8rem;
}

.album img {
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.55);
  display: block;
  width: 100%;
}

.album-label {
  background: var(--link-color);
  color: #130b09;
  font-size: 0.68rem;
  font-weight: 900;
  left: -1rem;
  letter-spacing: 0.15em;
  line-height: 1;
  padding: 0.9rem 1rem;
  position: absolute;
  text-transform: uppercase;
  top: 1.5rem;
  z-index: 2;
}

.reception {
  border-top: 1px solid var(--line);
  margin-top: clamp(4rem, 10vw, 8rem);
  padding-top: clamp(3rem, 7vw, 5rem);
}

.section-heading {
  align-items: end;
  display: flex;
  justify-content: space-between;
}

.section-heading .eyebrow {
  order: 2;
}

.quotes {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

blockquote {
  background: linear-gradient(145deg, rgba(40, 27, 23, 0.88), rgba(18, 13, 12, 0.9));
  border-left: 3px solid var(--link-color);
  margin: 0;
  padding: clamp(1.5rem, 4vw, 2.5rem);
}

blockquote p {
  font-family: Georgia, serif;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.55;
  margin-top: 0;
}

blockquote cite {
  color: var(--muted-color);
  font-size: 0.68rem;
  font-style: normal;
  font-weight: 850;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.featured-quote {
  grid-column: 1 / -1;
}

@media screen and (max-width: 760px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero-copy {
    text-align: center;
  }

  h1 {
    font-size: clamp(3rem, 15vw, 4.3rem);
    width: auto;
  }

  .lead {
    margin-inline: auto;
  }

  .actions {
    justify-content: center;
  }

  .album {
    margin-inline: auto;
    max-width: 560px;
  }

  .section-heading {
    align-items: start;
    flex-direction: column-reverse;
  }

  .quotes {
    grid-template-columns: 1fr;
  }

  .featured-quote {
    grid-column: auto;
  }
}
</style>
