<template>
  <div :class="classes">
    <HighlightLarge text="Budget"/>
    <div class="w-1/2 h-50 justify-center pt-4">
      <BudgetTableContent>
        <div v-if="this.$store.state.editId == 1" class="bg-red-500 z-50">Test</div>
      </BudgetTableContent>
    </div>
  </div>
</template>

<script>
import HighlightLarge from './HighlightLarge.vue';
import BudgetTableContent from './BudgetTableContent.vue';

export default {
  name: 'BudgetContent',
  components: {
    HighlightLarge, BudgetTableContent,
  },
  computed: {
    classes() {
      return 'h-full w-full flex flex-col items-center pt-4';
    },
  },
};
</script>

<style scoped>

</style>
