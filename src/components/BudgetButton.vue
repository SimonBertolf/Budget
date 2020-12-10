<template>
  <button :id="id" type="submit" :class="classes" v-on:click="eventHandler">
  Edit
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
  },
  computed: {
    classes() {
      return 'bg-white p-1 rounded w-full text-black';
    },
  },
};
</script>

<style scoped>

</style>
