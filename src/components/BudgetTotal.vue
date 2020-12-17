<template>
  <div :class="classes1">
    <TextLarge v-if="this.$store.state.totalBudget >= 0">Gewin:
      <HighlightLarge :text="this.$store.state.totalBudget"/> </TextLarge>
    <TextLarge v-else>Verlust:  <HighlightLarge :text="this.$store.state.totalBudget"/> </TextLarge>
  </div>
</template>

<script>
import TextLarge from './TextLarge.vue';
import HighlightLarge from './HighlightLarge.vue';

export default {
  name: 'BudgetTotal',
  components: { HighlightLarge, TextLarge },
  computed: {
    classes() {
      return 'bg-gray-100 flex flex-row items-center w-2/3 h-20 rounded';
    },
  },
  data: () => ({
    value: 0,
  }),
  mounted() {
    this.$store.commit('refreshTotalBudget');
  },
};
</script>

<style scoped>

</style>
