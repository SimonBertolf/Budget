<template>
  <KeyfigureCard :text="formattedPercent" :date="date" :desc="desc"/>
</template>

<script>
import KeyfigureCard from './KeyfigureCard.vue';

export default {
  name: 'KeyfigurePercentCard',
  components: {
    KeyfigureCard,
  },
  props: {
    desc: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  computed: {
    formattedPercent() {
      const formatedValue = this.value * 100;
      const fixedValue = formatedValue.toFixed(2);
      return `${fixedValue}%`;
    },
  },
};
</script>

<style scoped>

</style>
