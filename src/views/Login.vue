<template>
  <Background>
    <loginCardContent/>
  </Background>
</template>

<script>
import Background from '../components/Background.vue';
import LoginCardContent from '../components/LoginCardContent.vue';

export default {
  name: 'LoginPage',
  components: { LoginCardContent, Background },
};
</script>

<style scoped>

</style>
