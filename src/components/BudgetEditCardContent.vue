<template>
    <form @submit.prevent="edit" class="flex w-full p-4 items-end   ">
      <BudgetImputFieldType
        :type="$store.state.editBudgetType" :update-type="updateType"/>
      <div class="p-3"></div>
      <BudgetImputFieldAmount
        :amount="$store.state.editBudgetAmount" :update-amount="updateAmount"/>
      <div class="p-3"></div>
      <BudgetImputFieldCycle
        :cycle="$store.state.editBudgetCycle" :update-cycle="updateCycle"/>
      <div class="p-3"></div>
      <div>
        <BudgetButtonClose/>
        <BudgetButtonSave/>
      </div>
    </form>
</template>

<script>
import axios from 'axios';
import BudgetImputFieldAmount from './BudgetImputFieldAmount.vue';
import BudgetImputFieldType from './BudgetImputFieldType.vue';
import BudgetImputFieldCycle from './BudgetImputFieldCycle.vue';
import BudgetButtonSave from './BudgetButtonSave.vue';
import BudgetButtonClose from './BudgetButtonClose.vue';

export default {
  name: 'BudgetEditCardContent',
  components: {
    BudgetImputFieldAmount,
    BudgetImputFieldType,
    BudgetImputFieldCycle,
    BudgetButtonSave,
    BudgetButtonClose,
  },
  data: () => ({
    data: [],
    amount: '',
    type: '',
    cycle: '',
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
    updateType(type) {
      this.type = type;
    },
    updateCycle(cycle) {
      this.cycle = cycle;
    },
    edit() {
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=editBudget&amount=${this.amount}&type=${this.type}&cycle=${this.cycle}&id=${this.$store.state.editId}`);
      console.log(this.$store.state.editId, this.amount, this.cycle, this.type);
      this.$store.state.editId = 0;
    },
  },
};
</script>

<style scoped>

</style>
