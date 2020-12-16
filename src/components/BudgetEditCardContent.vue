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
  }),
  computed: {
    classes() {
      return 'bg-gray-100 flex flex-row justify-evenly items-center w-2/3 h-20 rounded';
    },
  },
  methods: {
    updateAmount(amount) {
      this.$store.state.editBudgetAmount = amount;
    },
    updateType(type) {
      this.$store.state.editBudgetType = type;
    },
    updateCycle(cycle) {
      this.$store.state.editBudgetCycle = cycle;
    },
    edit() {
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=editBudget&amount=${this.$store.state.editBudgetAmount}&type=${this.$store.state.editBudgetType}&cycle=${this.$store.state.editBudgetCycle}&id=${this.$store.state.editId}`);
      this.$store.state.editId = 0;
    },
  },
};
</script>

<style scoped>

</style>
