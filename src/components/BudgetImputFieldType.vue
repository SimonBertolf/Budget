<template>
  <LabledImputField
    :update-value="updateType"
    :value="type"
    id="type"
    type="text"
    text="Type"
    colore="bg-white"/>
</template>

<script>
import LabledImputField from './ImputFieldLabled.vue';

export default {
  name: 'BudgetImputFieldType',
  components: { LabledImputField },
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
