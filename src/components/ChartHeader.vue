<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ChartHeader',
  computed: {
    classes() {
      return 'flex justify-between bg-gray-200 p-2';
    },
  },
};
</script>

<style scoped>

</style>
