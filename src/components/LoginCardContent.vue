<template>
  <LoginCard>
    <HighlightMedium text="Log-In"/>
    <div class="justify-around">
      <form @submit.prevent="login">
        <NameImputField :name="name" :update-name="updateName"/>
        <PasswordImputField/>
        <br>
        <ButtonLogin/>
      </form>
    </div>
  </LoginCard>
</template>

<script>
import axios from 'axios';
import LoginCard from './LoginCard.vue';
import NameImputField from './NameImputField.vue';
import PasswordImputField from './PasswordImputField.vue';
import HighlightMedium from './HighlightMedium.vue';
import ButtonLogin from './ButtonLogin.vue';

export default {
  name: 'LoginCardContent',
  components: {
    LoginCard, NameImputField, PasswordImputField, HighlightMedium, ButtonLogin,
  },
  data: () => ({
    name: '',
    pasword: '',
  }),
  methods: {
    login() {
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=signin&name=${this.name}&pasword=${this.pasword}`).then((response) => {
        console.log(response);
      });
    },
    updateName(name) {
      this.name = name;
    },
    updatePasword(pasword) {
      this.pasword = pasword;
    },
  },
};
</script>

<style scoped>

</style>
