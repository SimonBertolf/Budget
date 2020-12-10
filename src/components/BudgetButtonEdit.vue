<template>
  <BudgetButton :id="id" :eventHandler="eventHandler">Edit</BudgetButton>
</template>

<script>
import BudgetButton from './BudgetButton.vue';

export default {
  name: 'BudgetButtonEdit',
  components: { BudgetButton },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    eventHandler() {
      this.$store.commit('setEditId', this.id);
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
