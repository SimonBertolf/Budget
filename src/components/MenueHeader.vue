<template>
  <div class="h-screen w-full justify-center text-center flex flex-col">
    <highlight-large text="Budget Calculator"/>
    <text-large>3000</text-large>
  </div>
</template>

<script>
import HighlightLarge from './HighlightLarge.vue';
import TextLarge from './TextLarge.vue';

export default {
  name: 'MenueHeader',
  components: { TextLarge, HighlightLarge },
};
</script>

<style scoped>

</style>
