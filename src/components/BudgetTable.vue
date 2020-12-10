<template>
  <table :class="classes">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: 'BudgetTable',
  computed: {
    classes() {
      return 'border border-gray-400 w-full rounded h-full rounded';
    },
  },
};
</script>

<style scoped>

</style>
