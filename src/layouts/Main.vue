<template>
  <div class="bg">
    <div id="app">
      <SiteHeader />
      <div id="content" role="main">
        <slot></slot>
      </div>
      <footer class="site-footer">
        <span>Tyrannosatan</span>
        <span class="footer-mark" aria-hidden="true">✦</span>
        <span>Hisingen, Sweden</span>
      </footer>
    </div>
  </div>
</template>

<script>
import SiteHeader from '../components/Header.vue';

export default {
  name: 'AppLayout',
  components: {
    SiteHeader,
  },
};
</script>

<style>
:root {
  --ink: #0b0808;
  --surface: #15100f;
  --surface-raised: #211714;
  --line: rgba(218, 74, 31, 0.32);
  --text-color: #e7ded2;
  --muted-color: #a99a8e;
  --link-color: #e45f2c;
  --hover-color: #ff9a56;
  --display-font: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  --body-font: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color-scheme: dark;
  font-size: 100%;
}

body,
html {
  min-height: 100%;
  background: var(--ink);
  margin: 0;
}

body {
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  font-family: var(--body-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

#content {
  width: min(100% - 2rem, 1120px);
  min-height: 60vh;
  padding: clamp(2.5rem, 6vw, 6rem) 0;
  margin: auto;
}

.bg {
  min-height: 100vh;
  background:
    radial-gradient(circle at 78% 12%, rgba(156, 36, 16, 0.24), transparent 34rem),
    radial-gradient(circle at 8% 66%, rgba(98, 22, 12, 0.18), transparent 30rem),
    linear-gradient(180deg, #120d0c 0%, #090707 45%, #100b0a 100%);
  isolation: isolate;
  position: relative;
}

.bg::before {
  background-image: repeating-linear-gradient(115deg, transparent 0 22px, rgba(255, 255, 255, 0.012) 23px 24px);
  content: "";
  inset: 0;
  opacity: 0.55;
  pointer-events: none;
  position: fixed;
  z-index: -1;
}

a {
  color: var(--link-color);
  font-weight: 750;
  text-underline-offset: 0.2em;
  transition: color 160ms ease, border-color 160ms ease, transform 160ms ease;
}

a:hover {
  color: var(--hover-color);
}

img {
  max-width: 100%;
  height: auto;
}

hr {
  border: 0;
  border-top: 1px solid var(--line);
  margin: 3rem auto;
  width: 100%;
}

span.title {
  font-style: italic;
}

h1,
h2,
h3 {
  color: #f2e9df;
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: 0.035em;
  line-height: 0.98;
  margin: 0 0 0.75em;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(2.8rem, 8vw, 6.5rem);
}

h2 {
  font-size: clamp(2rem, 5vw, 3.75rem);
}

h3 {
  font-size: clamp(1.45rem, 3vw, 2.25rem);
}

p,
li {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.75;
}

button {
  background: var(--link-color);
  border: 1px solid var(--link-color);
  color: #110b09;
  font: 800 0.85rem/1 var(--body-font);
  letter-spacing: 0.12em;
  margin: 0.5rem;
  padding: 0.95rem 1.3rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease, transform 160ms ease;
}

button:hover {
  background: var(--hover-color);
  color: #090606;
  transform: translateY(-2px);
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--hover-color);
  outline-offset: 4px;
}

.site-footer {
  align-items: center;
  border-top: 1px solid var(--line);
  color: var(--muted-color);
  display: flex;
  font-size: 0.7rem;
  font-weight: 800;
  gap: 1rem;
  justify-content: center;
  letter-spacing: 0.18em;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
  text-transform: uppercase;
  width: min(100% - 2rem, 1120px);
}

.footer-mark {
  color: var(--link-color);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
