<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BackgroundMenueSmall',
  computed: {
    classes() {
      return 'bg-white h-5/6 s:w-10  justify-start  content-center flex flex-col rounded-tr rounded-br';
    },
  },
};
</script>

<style scoped>

</style>
