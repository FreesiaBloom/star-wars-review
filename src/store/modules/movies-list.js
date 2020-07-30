import axios from 'axios';

const getters = {
  allMovies: (state) => state.moviesList,
};
const actions = {
  async getAllMovies({ commit }) {
    const response = await axios.get('https://swapi.dev/api/films/');
    commit('setMovies', response.data.results);
  },
};
const mutations = {
  setMovies: (state, moviesList) => {
    state.moviesList = moviesList;
  },
};
const state = {
  moviesList: [],
};
export default {
  state,
  getters,
  actions,
  mutations,
};
