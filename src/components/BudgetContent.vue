<template>
  <div :class="classes">
    <HighlightLarge text="Budget"/>
    <BudgetEditCard v-if="this.$store.state.editId > 0"></BudgetEditCard>
    <div class="w-2/3 h-50 justify-center pt-4">
      <BudgetTableContent>
      </BudgetTableContent>
      <BudgetAddNewCard/>
      <div class="p-5"></div>
      <BudgetTotal/>
    </div>
  </div>
</template>

<script>
import HighlightLarge from './HighlightLarge.vue';
import BudgetTableContent from './BudgetTableContent.vue';
import BudgetEditCard from './BudgetEditCard.vue';
import BudgetAddNewCard from './BudgetAddNewCard.vue';
import BudgetTotal from './BudgetTotal.vue';

export default {
  name: 'BudgetContent',
  components: {
    HighlightLarge, BudgetTableContent, BudgetEditCard, BudgetAddNewCard, BudgetTotal,
  },
  computed: {
    classes() {
      return 'relative h-full w-full flex flex-col items-center pt-4';
    },
  },
};
</script>

<style scoped>

</style>
