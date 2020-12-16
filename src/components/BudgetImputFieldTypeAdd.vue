<template>
  <ImputField @custom-imput="updateValue" :value="value" id="type" type="text" color=""/>
</template>

<script>
import ImputField from './ImputField.vue';

export default {
  name: 'BudgetImputFieldTypeAdd',
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
