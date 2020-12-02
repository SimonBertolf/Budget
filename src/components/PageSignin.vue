<template>
  <BackgroundLogin>
    <SigninCardContent>
    </SigninCardContent>
  </BackgroundLogin>
</template>

<script>
import BackgroundLogin from './BackgroundLogin.vue';
import SigninCardContent from './SigninCardContent.vue';

export default {
  name: 'PageSignin',
  components: { SigninCardContent, BackgroundLogin },
};
</script>

<style scoped>

</style>
