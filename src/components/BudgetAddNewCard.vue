<template>
  <form @submit.prevent="add">
  <BudgetTable>
    <BudgetTableRow>
      <BudgetTableTh class="w-1/4">
        <BudgetImputFieldTypeAdd :value="type" :update-value="updateType"/>
      </BudgetTableTh>
       <BudgetTableTh class="w-1/4">
         <BudgetImputFieldAmountAdd :value="amount" :update-value="updateAmount"/>
       </BudgetTableTh>
       <BudgetTableTh class="w-1/4">
         <BudgetImputFieldCycleAdd :value="cycle" :update-value="updateCycle"/>
       </BudgetTableTh>
      <BudgetTableTh class="w-1/4">
        <BudgetButtonAddNew/>
      </BudgetTableTh>
    </BudgetTableRow>
    </BudgetTable>
  </form>
</template>

<script>
import axios from 'axios';
import BudgetTable from './BudgetTable.vue';
import BudgetTableRow from './BudgetTableRow.vue';
import BudgetTableTh from './BudgetTableTh.vue';
import BudgetImputFieldAmountAdd from './BudgetImputFieldAmountAdd.vue';
import BudgetImputFieldTypeAdd from './BudgetImputFieldTypeAdd.vue';
import BudgetImputFieldCycleAdd from './BudgetImputFieldCycleAdd.vue';
import BudgetButtonAddNew from './BudgetButtonAddNew.vue';

export default {
  name: 'BudgetEditCardContent',
  components: {
    BudgetImputFieldAmountAdd,
    BudgetImputFieldTypeAdd,
    BudgetImputFieldCycleAdd,
    BudgetButtonAddNew,
    BudgetTableRow,
    BudgetTableTh,
    BudgetTable,
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
    add() {
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=adNewBudget&amount=${this.amount}&type=${this.type}&cycle=${this.cycle}`);
    },
  },
};
</script>

<style scoped>

</style>
