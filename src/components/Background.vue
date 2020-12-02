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
      return 'bg-gray-500 h-screen w-full justify-start enter content-center flex flex-coll';
    },
  },
};
</script>

<style scoped>

</style>
