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
      return 'border border-black bg-gray-200 rounded';
    },
  },
};
</script>

<style scoped>

</style>
