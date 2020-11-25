<template>
  <input
    :id="id"
    :type="type"
    :placeholder="desc"
    :value="value" @input="updateValue"
    :required="required"
    class="bg-blue-100 p-1 rounded"
  >
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
    value: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('custom-imput', event.target.value);
    },
  },
};
</script>

<style scoped>

</style>
