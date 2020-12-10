<template>
  <button id="edit" type="submit" :class="classes">Save</button>
</template>

<script>
export default {
  name: 'BudgetEditButton',
  computed: {
    classes() {
      return 'bg-gradient-to-r from-red-800 to-red-700 p-1 rounded w-12 h-8 text-gray-300';
    },
  },
};
</script>

<style scoped>

</style>
