<template>
  <LabledImputField
    :update-value="updateCycle"
    :value="cycle"
    id="cycle"
    type="text"
    text="Cycle"
    colore="bg-white"/>
</template>

<script>
import LabledImputField from './ImputFieldLabled.vue';

export default {
  name: 'BudgetImputFieldCycle',
  components: { LabledImputField },
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
