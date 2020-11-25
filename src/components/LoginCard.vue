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
      return 'bg-blue-500 flex flex-col justify-evenly items-center sm:w-4 md:w-2/5 lg:w-1/5 h-56 rounded';
    },
  },
};
</script>

<style scoped>

</style>
