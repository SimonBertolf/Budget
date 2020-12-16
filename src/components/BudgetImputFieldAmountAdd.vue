<template>
  <ImputField :update-value="updateValue" :value="value" id="amount" type="text" color=""/>
</template>

<script>
import ImputField from './ImputField.vue';

export default {
  name: 'BudgetImputFieldAmountAdd',
  components: { ImputField },
  props: {
    value: {
      type: String,
      required: true,
    },
    updateValue: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
