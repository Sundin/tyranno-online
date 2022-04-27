import News from './home/News.vue';
import About from './pages/About.vue';
import Tour from './tour/Tour.vue';
import Merch from './pages/Merch.vue';

const routes = {
  '/': News,
  '/news': News,
  '/about': About,
  '/tour': Tour,
  '/merch': Merch,
};

export default routes;
