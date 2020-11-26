<template>
  <LoginCard>
    <HighlightMedium text="Sign-In"/>
    <div class="justify-around">
      <form @submit.prevent="signin">
        <NameImputField :name="name" :update-name="updateName"/>
        <PasswordImputField :pasword="pasword" :update-pasword="updatePasword"/>
        <br>
        <div v-if="error" class="bg-red-300">User Existiert bereits</div>
        <ButtonSignin/>
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
import ButtonSignin from './ButtonSignin.vue';

export default {
  name: 'LoginCardContent',
  components: {
    ButtonSignin, LoginCard, NameImputField, PasswordImputField, HighlightMedium,
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
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=signing&name=${this.name}&pasword=${this.pasword}`).then((response) => {
        const { data } = response;
        if (data) {
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
