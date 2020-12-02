<template>
    <PageLogin/>
</template>

<script>
import PageLogin from '../components/PageLogin.vue';

export default {
  name: 'Login',
  components: { PageLogin },
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
