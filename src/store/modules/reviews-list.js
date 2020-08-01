// import axios from 'axios';

import Axios from "axios";

const getters = {};
const actions = {
    async addReview({ commit }, text) {
        const response = await Axios.post();
    }
};
const mutations = {};
const state = {
    reviewsList: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
