<template>
  <Background>
<!--    <BackgroundMenueBig>-->
<!--      <slot></slot>-->
<!--    </BackgroundMenueBig>-->
    <BackgroundMenueSmall>
      <slot></slot>
    </BackgroundMenueSmall>
    <BackgroundContent>
      <slot></slot>
    </BackgroundContent>
  </Background>
</template>

<script>
import Background from './Background.vue';
import BackgroundContent from './BackgroundContent.vue';
// import BackgroundMenueBig from './BackgroundMenueBig.vue';
import BackgroundMenueSmall from './BackgroundMenueSmall.vue';

export default {
  name: 'Page',
  components: {
    // Background, BackgroundContent, BackgroundMenueBig,
    Background, BackgroundContent, BackgroundMenueSmall,
  },
};
</script>

<style scoped>

</style>
