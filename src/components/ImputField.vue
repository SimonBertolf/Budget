<template>
  <input :id="id" type="text" :placeholder="desc" class="border border-black pl-1">
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
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
