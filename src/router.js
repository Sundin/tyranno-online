import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('./home/Home.vue');
const About = () => import('./pages/About.vue');
const Discography = () => import('./discography/Discography.vue');
const Release = () => import('./discography/Release.vue');
const Merch = () => import('./pages/Merch.vue');
const NotFound = () => import('./pages/NotFound.vue');
const Tour = () => import('./tour/Tour.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/discography', component: Discography },
    { path: '/discography/:slug', component: Release, props: true },
    { path: '/news', redirect: '/discography' },
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
