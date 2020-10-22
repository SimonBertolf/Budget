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
      default: 'text-orange-600',
    },
  },
  computed: {
    classes() {
      return `text-xl ${this.color}`;
    },
  },
};
</script>

<style scoped>

</style>
