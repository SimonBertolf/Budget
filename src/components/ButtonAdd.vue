<template>
  <button id="add" type="submit" class="bg-gray-300  rounded h-8 w-20 self-end ml-5">
    {{ text }}
  </button>
</template>

<script>

export default {
  name: 'ButtonAdd',
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
