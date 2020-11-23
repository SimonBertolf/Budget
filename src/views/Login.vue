<template>
  <AppLayout v-if="!itsUser">
    <LoginForm />
  </AppLayout>
</template>

<script>
import AppLayout from '../components/AppLayout.vue';
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'Login',
  components: { LoginForm, AppLayout },
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
