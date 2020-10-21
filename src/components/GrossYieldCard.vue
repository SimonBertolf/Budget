<template>
  <GrossYieldCardComponent :gross-yield="grossYield" :date="date"/>
</template>

<script>
import GrossYieldCardComponent from './GrossYieldCardComponent.vue';

export default {
  name: 'GrossYieldCard',
  components: {
    GrossYieldCardComponent,
  },
  mounted() {
    this.$store.dispatch('fetchGrossYield');
  },
  computed: {
    grossYield() {
      return this.$store.state.grossYield.value;
    },
    date() {
      return this.$store.state.grossYield.date;
    },
  },
};
</script>

<style scoped>

</style>
