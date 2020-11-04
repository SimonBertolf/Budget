<template>
	<Button :id="id" type="button" class="bg-gray-300 p-1 rounded w-full ">
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
