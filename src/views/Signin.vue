<template>
    <PageSignin/>
</template>

<script>
import PageSignin from '../components/PageSignin.vue';

export default {
  name: 'Signin',
  components: { PageSignin },
  beforeRouteEnter(to, from, next) {
    if (from === 'Signin' && this.$store.user) {
      next('/login');
    } else {
      next();
    }
  },
};
</script>

<style scoped>

</style>
