<template>
    <form @submit.prevent="edit" class="flex justify-evenly w-full p-4 justify-self-end ">
      <BudgetImputFieldType :type="type" :update-type="updateType"/>
      <BudgetImputFieldAmount :amount="amount" :update-amount="updateAmount"/>
      <BudgetImputFieldCycle :cycle="cycle" :update-cycle="updateCycle"/>
      <BudgetEditButton/>
    </form>
</template>

<script>
// import axios from 'axios';
import BudgetImputFieldAmount from './BudgetImputFieldAmount.vue';
import BudgetImputFieldType from './BudgetImputFieldType.vue';
import BudgetImputFieldCycle from './BudgetImputFieldCycle.vue';
import BudgetEditButton from './BudgetEditButton.vue';

export default {
  name: 'BudgetEditCard',
  components: {
    BudgetImputFieldAmount,
    BudgetImputFieldType,
    BudgetImputFieldCycle,
    BudgetEditButton,
  },
  data: () => ({
    amount: '',
    type: '',
    cycle: '',
    error: false,
  }),
  computed: {
    classes() {
      return 'bg-gray-100 flex flex-row justify-evenly items-center w-2/3 h-20 rounded';
    },
  },
  methods: {
    updateAmount(amount) {
      this.amount = amount;
    },
    updateType(amount) {
      this.amount = amount;
    },
    updateCycle(amount) {
      this.amount = amount;
    },
    edit() {
      // axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=login&name=${this.name}&pasword=${this.pasword}`);
    },
  },
};
</script>

<style scoped>

</style>
