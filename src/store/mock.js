import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grossYield: {
      value: null,
      date: null,
    },
  },
  mutations: {
    setGrossYield(state, grossYield) {
      state.grossYield = grossYield;
    },
  },
  actions: {
    fetchGrossYield({ commit }) {
      const grossYield = {
        value: 0.047,
        date: new Date(),
      };
      commit('setGrossYield', grossYield);
    },
  },
  modules: {
  },
});
