<template>
  <Background>
    <MenueContent :slide="value"/>
    <MenueButtonSlide @slide="slide" :value="value" :text="text"/>
    <BackgroundContent>
      <slot></slot>
    </BackgroundContent>
  </Background>
</template>

<script>
import Background from './Background.vue';
import BackgroundContent from './BackgroundContent.vue';
import MenueContent from './MenueContent.vue';
import MenueButtonSlide from './MenueButtonSlide.vue';

export default {
  name: 'Page',
  components: {
    Background, BackgroundContent, MenueContent, MenueButtonSlide,
  },
  data: () => ({
    value: true,
    text: '<<',
  }),
  methods: {
    slide(value) {
      this.value = value;
      if (this.value) {
        this.value = false;
        this.text = '>>';
      } else {
        this.value = true;
        this.text = '<<';
      }
    },
  },
};
</script>

<style scoped>

</style>
