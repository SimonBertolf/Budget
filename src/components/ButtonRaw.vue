<template>
	<button :id="id" type="submit" class="bg-gray-300 p-1 rounded w-full ">
		<slot></slot>
	</button>
</template>

<script>
export default {
  name: 'ButtonRaw',
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
