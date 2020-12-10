<template>
  <BudgetButton :id="id" :eventHandler="eventHandler" text="Edit"/>
</template>

<script>
import axios from 'axios';
import BudgetButton from './BudgetButton.vue';

export default {
  name: 'BudgetButtonEdit',
  components: { BudgetButton },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    data: [],
    error: false,
  }),
  methods: {
    eventHandler() {
      this.$store.commit('setEditId', this.id);
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=findeEditBudget&id=${this.id}`).then((response) => {
        this.data = response;
        this.$store.commit('setEditBudgetValuesType', this.data.data.type);
        this.$store.commit('setEditBudgetValuesValue', this.data.data.value);
        this.$store.commit('setEditBudgetValuesCycle', this.data.data.cycle);
      });
    },
  },
  computed: {
    classes() {
      return 'bg-white p-1 rounded w-full text-black';
    },
  },
};
</script>

<style scoped>

</style>
