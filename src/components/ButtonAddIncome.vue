<template>
	<ButtonRaw v-on:click.native="test" id="AddIncome"> Add Income </ButtonRaw>
</template>

<script>
import ButtonRaw from './ButtonRaw.vue';

let tot = 0;

export default {
  name: 'ButtonAddIncome',
  components: { ButtonRaw },
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
