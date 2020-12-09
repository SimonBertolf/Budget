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
      return 'border border-black';
    },
  },
};
</script>

<style scoped>

</style>
