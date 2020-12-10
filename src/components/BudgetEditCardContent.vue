<template>
    <form @submit.prevent="edit" class="flex w-full p-4 items-end   ">
      <BudgetImputFieldType :type="type" :update-type="updateType"/>
      <div class="p-3"></div>
      <BudgetImputFieldAmount :amount="amount" :update-amount="updateAmount"/>
      <div class="p-3"></div>
      <BudgetImputFieldCycle :cycle="cycle" :update-cycle="updateCycle"/>
      <div class="p-3"></div>
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
    data: [],
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
      // axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=saveBudgetEdit&amount=${this.amount}&type=${this.type}&cycle=${this.cycle}`);
      this.$store.state.editId = 0;
    },
  },
};
</script>

<style scoped>

</style>
