<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BackgroundMenueBig',
  computed: {
    classes() {
      return 'bg-white h-5/6 w-1/6 justify-center content-center flex flex-col rounded-tr rounded-br';
    },
  },
};
</script>

<style scoped>

</style>
