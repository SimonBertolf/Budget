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
      return 'border border-black w-full rounded';
    },
  },
};
</script>

<style scoped>

</style>
