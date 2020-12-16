<template>
  <div :class="classes1">
    <div :class="classes">
      <BudgetEditCardContent>
        <slot></slot>
      </BudgetEditCardContent>
    </div>
    <div class="p-48"></div>
  </div>
</template>

<script>
import BudgetEditCardContent from './BudgetEditCardContent.vue';

export default {
  name: 'BudgetEditCard',
  components: { BudgetEditCardContent },
  computed: {
    classes() {
      return 'bg-gray-100 flex flex-row items-center w-2/3 h-20 rounded';
    },
    classes1() {
      return 'absolute top-0 lef-0 bg-opacity-75 bg-gray-500 flex flex-col justify-center h-full w-full items-center ';
    },
  },
};
</script>

<style scoped>

</style>
