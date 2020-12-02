<template>
  <BackgroundLogin>
    <LoginCardContent>
    </LoginCardContent>
  </BackgroundLogin>
</template>

<script>
import BackgroundLogin from './BackgroundLogin.vue';
import LoginCardContent from './LoginCardContent.vue';

export default {
  name: 'PageLogin',
  components: { LoginCardContent, BackgroundLogin },
};
</script>

<style scoped>

</style>
