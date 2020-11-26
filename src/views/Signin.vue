<template>
  <Background>
    <SigninCardContent/>
  </Background>
</template>

<script>
import Background from '../components/Background.vue';
import SigninCardContent from '../components/SigninCardContent.vue';

export default {
  name: 'Signin',
  components: { SigninCardContent, Background },
  beforeRouteEnter(to, from, next) {
    if (from === 'Signin' && this.$store.user) {
      next('/');
    } else {
      next();
    }
  },
};
</script>

<style scoped>

</style>
