<template>
  <main-layout>
    <h1>Merch</h1>
    <p class="intro">Selected artifacts from Jawbreaker Records.</p>

    <div class="merch-grid">
      <a
        v-for="product in products"
        :key="`${product.name}-${product.type}`"
        class="merch-card"
        :href="product.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Buy ${product.name} (${product.type}) at Jawbreaker Records`"
      >
        <span class="corner corner-top" aria-hidden="true"></span>
        <img
          :alt="`${product.name} — ${product.type}`"
          class="product-image"
          :src="product.image"
          loading="lazy"
          width="1200"
          height="1200"
        >
        <span class="product-copy">
          <strong>{{ product.name }}</strong>
          <span>{{ product.type }}</span>
        </span>
        <span class="shop-arrow" aria-hidden="true">↗</span>
        <span class="corner corner-bottom" aria-hidden="true"></span>
      </a>
    </div>

    <p class="store-link">
      More Tyrannosatan merchandise and current availability at
      <a
        href="https://www.jawbreaker.se/?s=tyrannosatan&amp;post_type=product"
        target="_blank"
        rel="noopener noreferrer"
      >Jawbreaker Records</a>.
    </p>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
import { products } from '../merch/products.js';
</script>

<style scoped>
.intro {
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  margin: -0.5rem 0 2rem;
  text-transform: uppercase;
}

.merch-grid {
  display: grid;
  gap: 1.15rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0 auto;
  text-align: left;
}

.merch-card {
  background: rgba(8, 4, 4, 0.42);
  border: 1px solid rgba(190, 60, 8, 0.7);
  box-shadow: inset 0 0 0 4px #171010, inset 0 0 0 5px rgba(169, 163, 159, 0.3);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 0.75rem 0.75rem 1.1rem;
  position: relative;
  text-decoration: none;
  transition: border-color 140ms ease, color 140ms ease, transform 140ms ease;
}

.merch-card:hover,
.merch-card:focus-visible {
  border-color: var(--hover-color);
  color: var(--hover-color);
  transform: translateY(-3px);
}

.corner {
  border-color: var(--hover-color);
  height: 0.72rem;
  pointer-events: none;
  position: absolute;
  width: 0.72rem;
  z-index: 1;
}

.corner-top {
  border-left: 2px solid;
  border-top: 2px solid;
  left: 0.45rem;
  top: 0.45rem;
}

.corner-bottom {
  border-bottom: 2px solid;
  border-right: 2px solid;
  bottom: 0.45rem;
  right: 0.45rem;
}

.product-image {
  aspect-ratio: 1;
  background: #080505;
  display: block;
  object-fit: cover;
  width: 100%;
}

.product-copy {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.95rem 2rem 0 0.15rem;
}

.product-copy strong {
  font-size: clamp(1.05rem, 2.6vw, 1.35rem);
  line-height: 1.08;
  text-transform: uppercase;
}

.product-copy > span {
  color: var(--link-color);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.shop-arrow {
  bottom: 0.7rem;
  font-size: 1.35rem;
  line-height: 1;
  position: absolute;
  right: 0.85rem;
}

.store-link {
  margin: 2.5rem auto 0;
  max-width: 34rem;
}

@media screen and (max-width: 620px) {
  .merch-grid { grid-template-columns: 1fr; }

  .product-copy strong { font-size: 1.2rem; }
}
</style>
