<template>
  <span :class="classes">{{ text }}</span>
</template>

<script>
export default {
  name: 'HighlightLarge',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'text-Black',
    },
  },
  computed: {
    classes() {
      return `text-2xl font-bold ${this.color}`;
    },
  },
};
</script>

<style scoped>

</style>
