<template>
  <div v-if="slide" :class="classes">
    <highlight-large text="Budget Calculator"/>
    <text-large>3000</text-large>
  </div>
  <div v-else :class="classes1">
    <highlight-large text="BC3000"/>
  </div>
</template>

<script>
import HighlightLarge from './HighlightLarge.vue';
import TextLarge from './TextLarge.vue';

export default {
  name: 'MenueHeader',
  components: { TextLarge, HighlightLarge },
  props: {
    slide: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    classes() {
      return 'w-full h-20 justify-center text-center flex flex-col';
    },
    classes1() {
      return 'w-full h-24 justify-center text-center flex flex-col';
    },
  },
};
</script>

<style scoped>

</style>
