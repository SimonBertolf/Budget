<template>
  <Background>
    <BackgroundMenue>
      <slot></slot>
    </BackgroundMenue>
    <BackgroundContent>
      <slot></slot>
    </BackgroundContent>
  </Background>
</template>

<script>
import Background from './Background.vue';
import BackgroundContent from './BackgroundContent.vue';
import BackgroundMenue from './BackgroundMenue.vue';

export default {
  name: 'Page',
  components: { Background, BackgroundContent, BackgroundMenue },
};
</script>

<style scoped>

</style>
