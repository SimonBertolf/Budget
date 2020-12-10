<template>
  <LabledImputField
    :update-value="updateAmount"
    :value="amount"
    id="amount"
    type="number"
    text="Amount"
    colore="bg-white"/>
</template>

<script>
import LabledImputField from './ImputFieldLabled.vue';

export default {
  name: 'BudgetImputFieldAmount',
  components: { LabledImputField },
  props: {
    amount: {
      type: String,
      required: true,
    },
    updateAmount: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
