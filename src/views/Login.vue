<template>
  <LoginPage/>
</template>

<script>
import LoginPage from '../components/LoginPage.vue';

export default {
  name: 'Login',
  components: { LoginPage },
  mounted() {
    if (this.itsUser) this.$router.push({ path: '/' });
  },
  computed: {
    itsUser() {
      return this.$store.state.user.user;
    },
  },
};
</script>

<style scoped>

</style>
