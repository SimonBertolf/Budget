<template>
  <button :id="id" type="submit" :class="classes" v-on:click="eventHandler">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BudgetButton',
  props: {
    id: {
      type: String,
      required: true,
    },
    eventHandler: {
      type: Function,
      required: true,
    },
    color: {
      type: String,
      default: 'text-black w-full',
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return `bg-white p-1 rounded ${this.color}`;
    },
  },
};
</script>

<style scoped>

</style>
