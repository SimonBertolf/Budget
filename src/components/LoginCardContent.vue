<template>
  <LoginCard>
    <div class="justify-around">
      <HighlightLarge text="Budget Calculator 3000" color="text-black"/>
      <form @submit.prevent="login">
        <LoginImputFieldName :name="name" :update-name="updateName"/>
        <LoginImputFieldPassword :pasword="pasword" :update-pasword="updatePasword"/>
        <br>
        <div v-if="error == 1" class="text-red-500">Pasword is wrong</div>
        <div v-if="error == 2" class="text-red-500">Name is wrong</div>
        <LoginButton id="login"/>
      </form>
    </div>
  </LoginCard>
</template>

<script>
import axios from 'axios';
import LoginCard from './LoginCard.vue';
import LoginImputFieldName from './LoginImputFieldName.vue';
import LoginImputFieldPassword from './LoginImputFieldPassword.vue';
import HighlightLarge from './HighlightLarge.vue';
import LoginButton from './LoginButton.vue';

export default {
  name: 'LoginCardContent',
  components: {
    LoginCard, LoginImputFieldName, LoginImputFieldPassword, HighlightLarge, LoginButton,
  },
  data: () => ({
    name: '',
    pasword: '',
    error: false,
  }),
  methods: {
    updateName(name) {
      this.name = name;
    },
    updatePasword(pasword) {
      this.pasword = pasword;
    },
    login() {
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=login&name=${this.name}&pasword=${this.pasword}`).then((response) => {
        const { data } = response;
        if (data) {
          if (data.user && data.pasword) {
            this.error = 0;
            this.$store.commit('setUser', data);
            this.$router.push({ path: '/home' });
          } else if (data.user && !data.pasword) {
            this.error = 1;
          } else {
            this.error = 2;
          }
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
