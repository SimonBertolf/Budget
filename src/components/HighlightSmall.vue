<template>
  <span :class="classes">{{ text }}</span>
</template>

<script>
export default {
  name: 'HighlightSmall',
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
      return `text-sm font-bold ${this.color}`;
    },
  },
};
</script>

<style scoped>

</style>
