<template>
  <div class="bg">
    <div id="app">
      <SiteHeader />
      <main id="content"><slot></slot></main>
    </div>
  </div>
</template>

<script setup>
import SiteHeader from '../components/Header.vue';
</script>

<style>
:root {
  --link-color: #a9a39f;
  --text-color: #be3c08;
  --hover-color: #e06520;
  --dark-red: #410000;
  color-scheme: dark;
  font-size: clamp(17px, 1.4vw, 24px);
}

* { box-sizing: border-box; }

html,
body {
  background: #171010;
  margin: 0;
  min-height: 100%;
}

body { overflow-x: hidden; }

#app {
  color: var(--text-color);
  font-family: Georgia, "Times New Roman", serif;
  min-height: 100vh;
  text-align: center;
}

#content {
  margin: auto;
  max-width: 70ch;
  padding: 1.5rem 1.25rem 4rem;
}

.bg {
  background: radial-gradient(ellipse at top, rgba(82, 12, 5, 0.16), transparent 34rem), #171010;
  min-height: 100vh;
  position: relative;
}

.bg::before {
  background-image: repeating-radial-gradient(circle at 30% 20%, transparent 0 6px, rgba(255, 255, 255, 0.012) 7px 8px);
  content: "";
  inset: 0;
  opacity: 0.35;
  pointer-events: none;
  position: fixed;
}

h1,
h2,
h3 {
  color: var(--text-color);
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.15;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-top: 1.2em;
}

h2 { font-size: clamp(1.5rem, 3.5vw, 2.1rem); }
h3 { font-size: clamp(1.2rem, 3vw, 1.55rem); }
p, li { line-height: 1.55; }

a {
  color: var(--link-color);
  font-weight: bold;
  text-underline-offset: 0.14em;
}

a:hover,
a:focus-visible { color: var(--hover-color); }

a:focus-visible,
button:focus-visible {
  outline: 2px dashed var(--hover-color);
  outline-offset: 4px;
}

img {
  height: auto;
  max-width: 100%;
}

hr {
  border: 0;
  border-top: 1px solid rgba(190, 60, 8, 0.6);
  margin: 2.5rem auto;
  width: 50%;
}

span.title { font-style: italic; }

button {
  background: var(--dark-red);
  border: 2px solid var(--text-color);
  border-radius: 3px;
  color: var(--text-color);
  cursor: pointer;
  font: inherit;
  margin: 0.5rem;
  padding: 0.55rem 1rem;
}

button:hover { background: #6a0000; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; }
}
</style>
