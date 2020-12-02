<template>
  <span :class="classes"><slot></slot></span>
</template>

<script>
export default {
  name: 'TextMedium',
  props: {
    color: {
      type: String,
      default: 'text-Black',
    },
  },
  computed: {
    classes() {
      return `text-lg ${this.color}`;
    },
  },
};
</script>

<style scoped>

</style>
