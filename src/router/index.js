import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MoviesList from '../components/MoviesList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movies-list',
    name: 'MoviesList',
    component: MoviesList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
