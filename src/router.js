import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('./home/Home.vue');
const News = () => import('./home/News.vue');
const About = () => import('./pages/About.vue');
const Merch = () => import('./pages/Merch.vue');
const NotFound = () => import('./pages/NotFound.vue');
const Tour = () => import('./tour/Tour.vue');

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
