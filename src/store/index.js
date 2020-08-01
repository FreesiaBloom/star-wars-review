import Vue from 'vue';
import Vuex from 'vuex';
import MoviesList from './modules/movies-list';
import ReviewsList from './modules/reviews-list';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    MoviesList,
    ReviewsList,
  },
});
