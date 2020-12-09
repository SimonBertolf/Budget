<template>
  <td :class="classes">
    <slot></slot>
  </td>
</template>

<script>
export default {
  name: 'BudgetTableTd',
  computed: {
    classes() {
      return 'border border-black rounded';
    },
  },
};
</script>

<style scoped>

</style>
