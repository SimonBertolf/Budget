<template>
  <div :class="classes">
    <HighlightLarge text="Budget"/>
    <div class="w-1/2 h-full justify-center pt-4 ">
      <BudgetTable>
        <BudgetTableRow>
          <BudgetTableTh>Type</BudgetTableTh>
          <BudgetTableTh>Value</BudgetTableTh>
          <BudgetTableTh></BudgetTableTh>
        </BudgetTableRow>
      <BudgetTableRow v-for="{ budget_type_id, Value,} in this.data.data" :key="Value">
        <BudgetTableTd>{{ budget_type_id }}</BudgetTableTd>
        <BudgetTableTd>{{ Value }}</BudgetTableTd>
        <BudgetTableTd> Button </BudgetTableTd>
      </BudgetTableRow>
      </BudgetTable>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HighlightLarge from './HighlightLarge.vue';
import BudgetTable from './BudgetTable.vue';
import BudgetTableRow from './BudgetTableRow.vue';
import BudgetTableTh from './BudgetTableTh.vue';
import BudgetTableTd from './BudgetTableTd.vue';

export default {
  name: 'BudgetContent',
  components: {
    HighlightLarge, BudgetTable, BudgetTableRow, BudgetTableTh, BudgetTableTd,
  },
  data: () => ({
    data: null,
  }),
  computed: {
    classes() {
      return 'h-full w-full flex flex-col items-center pt-4';
    },
  },

  mounted() {
    axios.get('http://192.168.1.140/BudgetBackend/server.php?action=showbudget').then((response) => {
      // const { data } = response;
      this.data = response;
    });
  },
};
</script>

<style scoped>

</style>
