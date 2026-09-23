import { createRouter, createWebHistory } from 'vue-router';
import Home from './home/Home.vue';
import News from './home/News.vue';
import About from './pages/About.vue';
import Merch from './pages/Merch.vue';
import NotFound from './pages/NotFound.vue';
import Tour from './tour/Tour.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/news', component: News },
    { path: '/about', component: About },
    { path: '/tour', component: Tour },
    { path: '/merch', component: Merch },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

export default router;
