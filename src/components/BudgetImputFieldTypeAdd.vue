<template>
  <ImputField @custom-imput="updateType" :value="type" id="type" type="text" color=""/>
</template>

<script>
import ImputField from './ImputField.vue';

export default {
  name: 'BudgetImputFieldTypeAdd',
  components: { ImputField },
  props: {
    type: {
      type: String,
      required: true,
    },
    updateType: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
