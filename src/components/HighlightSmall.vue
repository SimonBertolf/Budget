<template>
  <span class="text-base text-black">{{ text }}</span>
</template>

<script>
export default {
  name: 'HighlightSmall',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
