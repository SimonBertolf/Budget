<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainContentCard',
  computed: {
    classes() {
      return 'bg-blue-500 flex flex-col justify-between items-center rounded h-full w-full p-3';
    },
  },
};
</script>

<style scoped>

</style>
