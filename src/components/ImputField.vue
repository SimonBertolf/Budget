<template>
  <input
    :id="id"
    :type="type"
    :placeholder="desc"
    :value="value"
    @input="updateValue"
    :required="required"
    :class="classes"
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
    color: {
      type: String,
      default: 'bg-gray-100',
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('custom-imput', event.target.value);
    },
  },
  computed: {
    classes() {
      return `p-1 rounded w-full ${this.color}`;
    },
  },
};
</script>

<style scoped>

</style>
