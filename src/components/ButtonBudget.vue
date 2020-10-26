<template>
	<ButtonNav v-on:click.native="test" id="ButtonBudget"> Budget </ButtonNav>
</template>

<script>
 var tot = 0;
	import ButtonNav from './ButtonNav';

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
