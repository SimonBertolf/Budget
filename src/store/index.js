import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contentId: '1',
    user: null,
    editId: '0',
    editBudgetType: '-',
    editBudgetAmount: '-',
    editBudgetCycle: '-',
    showBudgetData: [],
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
    setShowBudgetData(state, showBudgetData) {
      state.showBudgetData = showBudgetData;
    },
    refreshBudget(state) {
      axios.get('http://192.168.1.140/BudgetBackend/server.php?action=showbudget').then((response) => {
        state.showBudgetData = response;
      });
    },
  },
  actions: {
  },
  modules: {
  },
});
