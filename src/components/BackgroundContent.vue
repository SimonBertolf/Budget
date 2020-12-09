<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BackgroundContent',
  computed: {
    classes() {
      return 'bg-white h-5/6 w-full p-52 justify-center content-center flex flex-wrap rounded m-5';
    },
  },
};
</script>

<style scoped>

</style>
