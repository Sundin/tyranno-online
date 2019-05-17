import Vue from 'vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import NotFound from './pages/NotFound.vue';

Vue.config.productionTip = false;

const routes = {
  '/': Home,
  '/about': About,
};

const vm = new Vue({
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
  render(h) { return h(this.ViewComponent); },
});

vm.$mount('#app');
