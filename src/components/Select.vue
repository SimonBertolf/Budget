<template>
    <v-select
      :inputId="id"
      :options="options"
      :value="selectedValue"
      @input="setSelected"
      :clearable="false"
      :searchable="false"
    >
    </v-select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    id: {
      type: String,
      default: undefined,
    },
    selectedValue: {
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setSelected(value) {
      this.$emit('update-value', value);
    },
  },
};
</script>

<style scoped>

</style>
