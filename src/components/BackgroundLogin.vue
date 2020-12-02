<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Background',
  computed: {
    classes() {
      return 'bg-gray-300 h-screen w-full flex items-center justify-center';
    },
  },
};
</script>

<style scoped>

</style>
