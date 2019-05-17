import Vue from 'vue';

import routes from './routes';
import NotFound from './pages/NotFound.vue';

Vue.config.productionTip = false;

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
