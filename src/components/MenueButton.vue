<template>
  <button id="menue" type="submit" :class="classes">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'MenueBudget',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return 'bg-gray-500';
    },
  },
};
</script>

<style scoped>

</style>
