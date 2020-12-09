<template>
  <BudgetTable>
    <BudgetTableRow>
      <BudgetTableTh>Type</BudgetTableTh>
      <BudgetTableTh>Value</BudgetTableTh>
      <BudgetTableTh></BudgetTableTh>
    </BudgetTableRow>
    <BudgetTableRow v-for="{ budget_type_id, Value,} in data" :key="Value">
      <BudgetTableTd>{{ budget_type_id }}</BudgetTableTd>
      <BudgetTableTd align="text-right">{{ Value }} CHF</BudgetTableTd>
      <BudgetTableTd> Button </BudgetTableTd>
    </BudgetTableRow>
  </BudgetTable>
</template>

<script>
import BudgetTable from './BudgetTable.vue';
import BudgetTableRow from './BudgetTableRow.vue';
import BudgetTableTh from './BudgetTableTh.vue';
import BudgetTableTd from './BudgetTableTd.vue';

export default {
  name: 'BudgetTableContent',
  components: {
    BudgetTable, BudgetTableRow, BudgetTableTh, BudgetTableTd,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
