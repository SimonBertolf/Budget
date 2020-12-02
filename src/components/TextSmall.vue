<template>
  <span :class="classes"><slot></slot></span>
</template>

<script>
export default {
  name: 'TextSmall',
  props: {
    color: {
      type: String,
      default: 'text-Black',
    },
  },
  computed: {
    classes() {
      return `text-sm ${this.color}`;
    },
  },
};
</script>

<style scoped>

</style>
