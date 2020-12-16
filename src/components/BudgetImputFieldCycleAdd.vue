<template>
  <ImputField @custom-imput="updateCycle" :value="value" id="cycle" type="texz" color=""/>
</template>

<script>
import ImputField from './ImputField.vue';

export default {
  name: 'BudgetImputFieldCycleAdd',
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
