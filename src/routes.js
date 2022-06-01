import Home from './home/Home.vue';
import Jawbreaker from './home/Jawbreaker.vue';
import News from './home/News.vue';
import About from './pages/About.vue';
import Tour from './tour/Tour.vue';
import Merch from './pages/Merch.vue';

const routes = {
  '/': Home,
  '/jawbreaker': Jawbreaker,
  '/news': News,
  '/about': About,
  '/tour': Tour,
  '/merch': Merch,
};

export default routes;
