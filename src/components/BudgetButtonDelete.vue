<template>
  <BudgetButton :id="id"
                color="bg-gradient-to-r from-red-800 to-red-700 w-10 text-gray-300"
                :eventHandler="eventHandler"
                text="del"
  />
</template>

<script>
import axios from 'axios';
import BudgetButton from './BudgetButton.vue';

export default {
  name: 'BudgetButtonDelete',
  components: { BudgetButton },
  props: {
    id: {
      type: String,
      required: true,
    },
    eventDelete: {
      type: Function,
      request: true,
    },
  },
  methods: {
    eventHandler() {
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=deleteBudgetvalue&id=${this.id}`);
    },
  },
};
</script>

<style scoped>

</style>
