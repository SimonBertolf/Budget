import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contentId: '1',
    user: null,
    editId: '0',
    editBudgetType: '-',
    editBudgetAmount: '-',
    editBudgetCycle: '-',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setEditId(state, editId) {
      state.editId = editId;
    },
    setContentId(state, contentId) {
      state.contentId = contentId;
    },
    setEditBudgetValuesType(state, editBudgetType) {
      state.editBudgetType = editBudgetType;
    },
    setEditBudgetValuesValue(state, editBudgetAmount) {
      state.editBudgetAmount = editBudgetAmount;
    },
    setEditBudgetValuesCycle(state, editBudgetCycle) {
      state.editBudgetCycle = editBudgetCycle;
    },
  },
  actions: {
  },
  modules: {
  },
});
