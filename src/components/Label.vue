<template>
	<label class="text-xs text-blue-600" :for="id">
		<slot></slot>
	</label>
</template>

<script>
  export default {
    name: 'Label',
		props: {
      id: {
        type: String,
				required: true
			}
		}
  };
</script>

<style scoped>

</style>
