<template>
	<ButtonRaw v-on:click.native="test" id="ButtonBudget"> Budget </ButtonRaw>
</template>

<script>
import ButtonRaw from './ButtonRaw';

let tot = 0;

export default {
  name: 'ButtonBudget',
  components: { ButtonNav },
  props: {},
  methods: {
    test() {
			 console.log(tot);
			 tot += 1.2;
    },
  },
};
</script>

<style scoped>

</style>
