<template>
  <input :id="id" :type="type" :placeholder="desc" class="bg-blue-100 p-1 rounded">
</template>

<script>
export default {
  name: 'ImputField',
  props: {
    id: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
