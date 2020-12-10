<template>
  <button v-on:click="clickHandler" id="menue" type="submit" :value="value" :class="classes">
    {{ text }}
  </button>
</template>

<script>

export default {
  name: 'BudgetButtonClose',
  props: {
    text: {
      type: String,
      default: 'X',
    },
    value: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    clickHandler() {
      this.$store.state.editId = 0;
    },
  },
  computed: {
    classes() {
      return 'bg-gray-500 rounded-lg h-5 w-5 mb-3 ml-5';
    },
  },
};
</script>

<style scoped>

</style>
