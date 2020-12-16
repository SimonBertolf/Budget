<template>
  <ImputField @custom-imput="updateAmount" :value="amount" id="amount" type="text" color=""/>
</template>

<script>
import ImputField from './ImputField.vue';

export default {
  name: 'BudgetImputFieldAmountAdd',
  components: { ImputField },
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
