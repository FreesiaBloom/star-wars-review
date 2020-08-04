// import axios from 'axios';

const getters = {
  allReviews: (state) => state.reviewsList,
};
const actions = {
  async getAllReviews({ commit }) {
    const reviews = JSON.parse(localStorage.getItem('reviewsList'));
    commit('setReviews', reviews);
  },
  submitReview({ commit }, newReview) {
    commit('addNewReview', newReview);
  },
};
const mutations = {
  setReviews: (state, reviewsList) => {
    state.reviewsList = reviewsList;
  },
  addNewReview: (state, newReview) => {
    if (!localStorage.getItem('reviewsList')) {
      localStorage.setItem('reviewsList', JSON.stringify([]));
    }
    state.reviewsList = JSON.parse(localStorage.reviewsList);
    state.reviewsList.unshift(newReview);

    localStorage.setItem('reviewsList', JSON.stringify(state.reviewsList));
  },
};

const state = {
  reviewsList: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
