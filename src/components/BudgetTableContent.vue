<template>
  <BudgetTable>
    <BudgetTableRow>
      <BudgetTableTh class="w-1/4">Type</BudgetTableTh>
      <BudgetTableTh class="w-1/4">Amount</BudgetTableTh>
      <BudgetTableTh class="w-1/4">Cycle</BudgetTableTh>
      <BudgetTableTh class="w-1/4">
      </BudgetTableTh>
    </BudgetTableRow>
    <BudgetTableRow
      v-for="{ ID, budget_type, Value, budget_cycle} in this.$store.state.showBudgetData.data"
                    :key="ID">
      <BudgetTableTd align="text-left pl-5">{{ budget_type }}</BudgetTableTd>
      <BudgetTableTd align="text-right pr-4">{{ Value }} CHF</BudgetTableTd>
      <BudgetTableTd align="text-right pr-4">{{ budget_cycle }}</BudgetTableTd>
      <BudgetTableTd>
        <div class="flex">
        <BudgetButtonEdit :id="ID"/>
        <BudgetButtonDelete :id="ID"/>
       </div>
      </BudgetTableTd>
    </BudgetTableRow>
  </BudgetTable>
</template>

<script>
// import axios from 'axios';
import BudgetTable from './BudgetTable.vue';
import BudgetTableRow from './BudgetTableRow.vue';
import BudgetTableTh from './BudgetTableTh.vue';
import BudgetTableTd from './BudgetTableTd.vue';
import BudgetButtonEdit from './BudgetButtonEdit.vue';
import BudgetButtonDelete from './BudgetButtonDelete.vue';

export default {
  name: 'BudgetTableContent',
  components: {
    BudgetTable,
    BudgetTableRow,
    BudgetTableTh,
    BudgetTableTd,
    BudgetButtonEdit,
    BudgetButtonDelete,
  },
  data: () => ({
    data: [],
  }),
  methods: {
    showBudget() {
      this.$store.commit('refreshBudget');
    },
  },
  mounted() {
    this.showBudget();
  },
};
</script>

<style scoped>

</style>
