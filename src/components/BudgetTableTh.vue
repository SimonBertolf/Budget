<template>
  <th :class="classes">
    <slot></slot>
  </th>
</template>

<script>
export default {
  name: 'BudgetTableTh',
  computed: {
    classes() {
      return 'border border-gray-400 bg-gray-200 rounded';
    },
  },
};
</script>

<style scoped>

</style>
