<template>
  <LoginCard>
    <HighlightMedium text="Log-In"/>
    <div class="justify-around">
      <form @submit.prevent="login">
        <NameImputField :name="name" :update-name="updateName"/>
        <PasswordImputField :pasword="pasword" :update-pasword="updatePasword"/>
        <br>
        <div v-if="error" class="bg-red-300">Paswor falsscgodfxgbok</div>
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
          console.log(this);
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
