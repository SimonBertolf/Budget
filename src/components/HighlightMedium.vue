<template>
  <span :class="classes">{{ text }}</span>
</template>

<script>
export default {
  name: 'HighlightMedium',
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
      return `text-lg font-bold ${this.color}`;
    },
  },
};
</script>

<style scoped>

</style>
