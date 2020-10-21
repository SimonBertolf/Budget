<template>
	<div class="relative before:border-none">
		<select
			:id="id"
			class="appearance-none border border-gray-500 text-gray-600 w-full focus:outline-none pl-1 leading-tight text-sm font-hairline"
		>
			<option class="text-sm font-hairline" v-for="option in options" :key="option">
				{{ option }}
			</option>
		</select>
		<div class="box-border pointer-events-none absolute inset-y-0 right-0 flex items-center border border-gray-500">

		</div>
	</div>
</template>

<script>
  export default {
    name: 'Select',
		props: {
      id: {
        type: String,
				required: true
			},
      options: {
        type: Array,
				required: true
			}
		}
  };
</script>

<style scoped>

</style>
