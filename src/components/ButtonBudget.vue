<template>
	<ButtonRaw v-on:click.native="test" id="ButtonBudget"> Budget </ButtonRaw>
</template>

<script>
 var tot = 0;
	import ButtonRaw from './ButtonRaw';

	export default {
		name: 'ButtonBudget',
		components: {ButtonNav},
		props: {},
		methods: {
			test(){
			 console.log(tot);
			 tot += 1.2;
			},
		},
	};
</script>

<style scoped>

</style>
