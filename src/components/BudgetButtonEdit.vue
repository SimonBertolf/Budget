<template>
  <BudgetButton :id="id" :eventHandler="eventHandler">Edit</BudgetButton>
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
    amount: '',
    type: '',
    cycle: '',
    error: false,
  }),
  methods: {
    eventHandler() {
      this.$store.commit('setEditId', this.id);
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=findeEditBudget&id=${this.id}`).then((response) => {
        this.data = response;
        console.log(this.data);
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
