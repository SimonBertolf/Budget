<template>
  <Button :id="id" type="button" class="p-1 bg-blue-100 rounded w-full">
    <slot></slot>
  </Button>
</template>

<script>
export default {
  name: 'ButtonNav',
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
