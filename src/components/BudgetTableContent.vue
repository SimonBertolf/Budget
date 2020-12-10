<template>
  <BudgetTable>
    <BudgetTableRow>
      <BudgetTableTh>Type</BudgetTableTh>
      <BudgetTableTh>Value</BudgetTableTh>
      <BudgetTableTh></BudgetTableTh>
    </BudgetTableRow>
    <BudgetTableRow v-for="{ ID, budget_type_id, Value,} in this.data.data" :key="ID">
      <BudgetTableTd>{{ budget_type_id }}</BudgetTableTd>
      <BudgetTableTd align="text-right">{{ Value }} CHF</BudgetTableTd>
      <BudgetTableTd><BudgetButtonEdit :id="ID"/></BudgetTableTd>
    </BudgetTableRow>
  </BudgetTable>
</template>

<script>
import axios from 'axios';
import BudgetTable from './BudgetTable.vue';
import BudgetTableRow from './BudgetTableRow.vue';
import BudgetTableTh from './BudgetTableTh.vue';
import BudgetTableTd from './BudgetTableTd.vue';
import BudgetButtonEdit from './BudgetButtonEdit.vue';

export default {
  name: 'BudgetTableContent',
  components: {
    BudgetTable, BudgetTableRow, BudgetTableTh, BudgetTableTd, BudgetButtonEdit,
  },
  data: () => ({
    data: [],
  }),
  mounted() {
    axios.get('http://192.168.1.140/BudgetBackend/server.php?action=showbudget').then((response) => {
      this.data = response;
    });
  },
};
</script>

<style scoped>

</style>
