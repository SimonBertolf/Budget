<template>
  <button v-on:click="clickHandler" id="menue" type="submit" :value="value" :class="classes">
    {{ text }}
  </button>
</template>

<script>

export default {
  name: 'MenueBudget',
  props: {
    text: {
      type: String,
      default: '<<',
    },
    value: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    clickHandler() {
      this.$emit('slide', this.value);
    },
  },
  computed: {
    classes() {
      return 'bg-gray-500 rounded-lg h-8 w-8';
    },
  },
};
</script>

<style scoped>

</style>
