<template>
  <Background>
    <BackgroundMenueBig v-if="value">
      <slot>yvsy</slot>
    </BackgroundMenueBig>
    <BackgroundMenueSmall v-else>
      <slot>Text</slot>
    </BackgroundMenueSmall>
    <MenueButton @slide="slide" :value="value" :text="text"/>
    <BackgroundContent>
      <slot></slot>
    </BackgroundContent>
  </Background>
</template>

<script>
import Background from './Background.vue';
import BackgroundContent from './BackgroundContent.vue';
import BackgroundMenueBig from './BackgroundMenueBig.vue';
import BackgroundMenueSmall from './BackgroundMenueSmall.vue';
import MenueButton from './MenueButton.vue';

export default {
  name: 'Page',
  components: {
    Background, BackgroundContent, BackgroundMenueBig, BackgroundMenueSmall, MenueButton,
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
