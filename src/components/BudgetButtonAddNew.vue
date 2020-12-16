<template>
  <button id="add" type="submit" :class="classes">Add New</button>
</template>

<script>

export default {
  name: 'BudgetButtonAddNew',
  props: {
  },
  computed: {
    classes() {
      return 'bg-gradient-to-r from-green-800 to-green-700 w-full text-gray-300 p-1 rounded';
    },
  },
};
</script>

<style scoped>

</style>
