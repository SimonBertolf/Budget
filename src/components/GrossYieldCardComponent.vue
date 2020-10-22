<template>
  <KeyfigurePercentCard desc="Bruttorendite (Soll) am " :date="date" :value="grossYield"/>
</template>

<script>
import KeyfigurePercentCard from './KeyfigurePercentCard.vue';

export default {
  name: 'GrossYieldCardComponent',
  components: {
    KeyfigurePercentCard,
  },
  props: {
    grossYield: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
