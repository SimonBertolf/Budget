<template>
  <LoadingCard v-if="loading"/>
  <GrossYieldCardComponent v-else :gross-yield="grossYield" :date="date"/>
</template>

<script>
import GrossYieldCardComponent from './GrossYieldCardComponent.vue';
import LoadingCard from './LoadingCard.vue';

export default {
  name: 'GrossYieldCard',
  components: {
    GrossYieldCardComponent,
    LoadingCard,
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
    loading() {
      return this.$store.state.grossYield.loading;
    },
  },
};
</script>

<style scoped>

</style>
