<template>
  <span :class="classes"><slot></slot></span>
</template>

<script>
export default {
  name: 'TextLarge',
  props: {
    color: {
      type: String,
      default: 'text-Black',
    },
  },
  computed: {
    classes() {
      return `text-2xl ${this.color}`;
    },
  },
};
</script>

<style scoped>

</style>
