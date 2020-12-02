<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LoginCard',
  computed: {
    classes() {
      return 'bg-white flex flex-col justify-evenly items-center w-1/3 max-w-md h-64 rounded';
    },
  },
};
</script>

<style scoped>

</style>
