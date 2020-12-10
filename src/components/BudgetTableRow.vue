<template>
  <tr :class="classes">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: 'BudgetTableRow',
  computed: {
    classes() {
      return 'border border-gray-400 rounded';
    },
  },
};
</script>

<style scoped>

</style>
