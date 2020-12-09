<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SigninCard',
  computed: {
    classes() {
      return 'bg-white flex flex-col justify-evenly items-center w-1/3 max-w-md rounded';
    },
  },
};
</script>

<style scoped>

</style>
