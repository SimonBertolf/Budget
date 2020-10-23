<template>
<Background>
  <NavBackground>
  </NavBackground>
  <ContentBackground>
  </ContentBackground>
</Background>
</template>

<script>
import Background from '../components/Background.vue';
import NavBackground from '../components/NavBackground.vue';
import ContentBackground from '../components/ContentBackground.vue';

export default {
  name: 'test',
  components: {
    Background,
    NavBackground,
    ContentBackground,
  },
};
</script>

<style scoped>

</style>
