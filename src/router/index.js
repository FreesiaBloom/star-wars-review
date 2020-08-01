import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MoviesList from '../components/movie/MoviesList.vue';
import MovieItem from '../components/movie/MovieItem.vue';
import ReviewsList from '../components/review/ReviewsList.vue';

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
  {
    path: '/movies-list/:id',
    name: 'MovieItem',
    component: MovieItem,
    props: true,
    // validation to prevent navigation with wrong url link
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  },
  {
    path: '/reviews-list',
    name: 'ReviewsList',
    component: ReviewsList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
