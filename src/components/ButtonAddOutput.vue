<template>
	<ButtonRaw v-on:click.native="test" id="AddOutput"> Add Output </ButtonRaw>
</template>

<script>
import ButtonNav from './ButtonRaw.vue';

let tot = 0;

export default {
  name: 'ButtonAddOutput',
  components: { ButtonRaw },
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
