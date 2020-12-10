<template>
  <div :class="classes">
    <BudgetEditCardContent>
      <slot></slot>
    </BudgetEditCardContent>
  </div>
</template>

<script>
// import axios from 'axios';
import BudgetEditCardContent from './BudgetEditCardContent.vue';

export default {
  name: 'BudgetEditCard',
  components: { BudgetEditCardContent },
  computed: {
    classes() {
      return 'bg-gray-100 flex flex-row items-center w-2/3 h-20 rounded';
    },
  },
};
</script>

<style scoped>

</style>
