<template>
  <button :id="id" type="submit" :class="classes">
  Log-In
  </button>
</template>

<script>
export default {
  name: 'LoginButton',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return 'bg-gradient-to-r from-red-800 to-red-700 p-1 rounded w-full text-gray-300';
    },
  },
};
</script>

<style scoped>

</style>
