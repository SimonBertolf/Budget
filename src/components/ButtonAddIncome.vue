<template>
	<ButtonNav v-on:click.native="test" id="AddIncome"> Add Income </ButtonNav>
</template>

<script>
import ButtonNav from './ButtonNav.vue';

let tot = 0;

export default {
  name: 'ButtonAddIncome',
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
