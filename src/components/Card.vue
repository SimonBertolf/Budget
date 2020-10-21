<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  computed: {
    classes() {
      return 'flex flex-col justify-center items-center border-t border-r border-b border-l border-gray-400 bg-white rounded-b p-4 leading-normal';
    },
  },
};
</script>

<style scoped>

</style>
