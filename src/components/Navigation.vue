<template>
	<NavBackground>
		<ProgramName/>
		<ButtonHome></ButtonHome>
		<ButtonBudget></ButtonBudget>
		<TextSmall>dhfhfjfs</TextSmall>
		<TextLarge>Teetsgsbvdlk</TextLarge>
	</NavBackground>
</template>

<script>
	import NavBackground from './NavBackground.vue';
	import ButtonHome from "./ButtonHome";
	import ButtonBudget from "./ButtonBudget";
	import TextLarge from "./TextLarge";
	import TextSmall from "./TextSmall";
	import ProgramName from "./ProgramName";

	export default {
		name: "Navigation",
		components: {ProgramName, TextSmall, TextLarge, ButtonBudget, ButtonHome, NavBackground},
		props: {
		},
	}
</script>

<style scoped>

</style>