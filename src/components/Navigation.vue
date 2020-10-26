<template>
	<NavBackground>
		<ButtonHome></ButtonHome>
		<ButtonBudget></ButtonBudget>
	</NavBackground>
</template>

<script>
	import NavBackground from './NavBackground.vue';
	import ButtonHome from "./ButtonHome";
	import ButtonBudget from "./ButtonBudget";

	export default {
		name: "Navigation",
		components: {ButtonBudget, ButtonHome, NavBackground},
		props: {
		},
	}
</script>

<style scoped>

</style>