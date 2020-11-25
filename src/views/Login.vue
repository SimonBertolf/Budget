<template>
  <Background>
    <loginCardContent/>
  </Background>
</template>

<script>
import Background from '../components/Background.vue';
import LoginCardContent from '../components/LoginCardContent.vue';

export default {
  name: 'Login',
  components: { LoginCardContent, Background },
  beforeRouteEnter(to, from, next) {
    if (from === 'Login' && this.$store.user) {
      next('/home');
    } else {
      next();
    }
  },
};
</script>

<style scoped>

</style>
