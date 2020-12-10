<template>
    <ImputField @custom-imput="updateValue" :value="value" :id="id" :type="type" :color="colore"/>
</template>

<script>
import ImputField from './ImputField.vue';

export default {
  name: 'BudgetImputField',
  components: { ImputField },
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    updateValue: {
      type: Function,
      required: true,
    },
    colore: {
      type: String,
      default: 'bg-white',
    },
  },
};
</script>

<style scoped>

</style>
