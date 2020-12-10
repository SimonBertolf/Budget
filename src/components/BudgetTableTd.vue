<template>
  <td :class="classes">
    <slot></slot>
  </td>
</template>

<script>
export default {
  name: 'BudgetTableTd',
  props: {
    align: {
      type: String,
      default: 'text-center',
    },
  },
  computed: {
    classes() {
      return `border border-gray-400 rounded ${this.align}`;
    },
  },
};
</script>

<style scoped>

</style>
