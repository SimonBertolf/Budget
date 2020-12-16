<template>
  <ImputField @custom-imput="updateCycle" :value="cycle" id="cycle" type="texz" color=""/>
</template>

<script>
import ImputField from './ImputField.vue';

export default {
  name: 'BudgetImputFieldCycleAdd',
  components: { ImputField },
  props: {
    cycle: {
      type: String,
      required: true,
    },
    updateCycle: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
