<template>
  <LoginCard>
    <HighlightLarge text="Budget Calculator 3000" color="text-black"/>
    <div class="justify-around">
      <form @submit.prevent="login">
        <LoginImputFieldName :name="name" :update-name="updateName"/>
        <LoginImputFieldPassword :pasword="pasword" :update-pasword="updatePasword"/>
        <br>
        <div v-if="error" class="text-red-500">Pasword or Name is wrong</div>
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
          this.$store.commit('setUser', data);
          this.$router.push({ path: '/' });
        } else {
          this.error = true;
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
