<template>
	<Button :id="id" type="button" class="border border-black p-1">
		<slot></slot>
	</Button>
</template>

<script>
	export default {
		name: 'ButtonNav',
		props: {
			id: {
				type: String,
				required: true,
			},
		},
	};
</script>

<style scoped>

</style>
