<template>
  <span class="text-3xl text-orange-600">{{ text }}</span>
</template>

<script>
export default {
  name: 'Highlight',
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
