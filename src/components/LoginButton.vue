<template>
  <button :id="id" type="submit" class="bg-gradient-to-r from-red-800 to-red-700 p-1 rounded w-full ">
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
};
</script>

<style scoped>

</style>
