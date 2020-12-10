import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    editId: '0',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setEditId(state, editId) {
      state.editId = editId;
    },
  },
  actions: {
  },
  modules: {
  },
});
