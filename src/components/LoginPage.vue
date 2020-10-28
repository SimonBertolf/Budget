<template>
  <Background>
    <loginCardContent/>
  </Background>
</template>

<script>
import Background from './Background.vue';
import LoginCardContent from './LoginCardContent.vue';

export default {
  name: 'LoginPage',
  components: { LoginCardContent, Background },
};
</script>

<style scoped>

</style>
