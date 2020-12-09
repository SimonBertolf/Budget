<template>
  <SigninCard>
    <div class="justify-around">
      <br>
      <HighlightLarge text="Budget Calculator 3000" color="text-black"/>
      <form @submit.prevent="signin">
        <LoginImputFieldName :name="name" :update-name="updateName"/>
        <LoginImputFieldPassword :pasword="pasword" :update-pasword="updatePasword"/>
        <LoginImputFieldPassword :pasword="pasword1" :update-pasword="updatePasword1"/>
          <br>
        <div v-if="error == 1" class="text-red-500">Username exist</div>
        <div v-if="error == 2" class="text-red-500">Pasword is not identical</div>
        <SigninButton id="signin"/>
        <br><br>
      </form>
    </div>
  </SigninCard>
</template>

<script>
import axios from 'axios';
import SigninCard from './SigninCard.vue';
import LoginImputFieldName from './LoginImputFieldName.vue';
import LoginImputFieldPassword from './LoginImputFieldPassword.vue';
import HighlightLarge from './HighlightLarge.vue';
import SigninButton from './SigninButton.vue';

export default {
  name: 'LoginCardContent',
  components: {
    SigninCard, LoginImputFieldName, LoginImputFieldPassword, HighlightLarge, SigninButton,
  },
  data: () => ({
    name: '',
    pasword: '',
    pasword1: '',
    error: false,
  }),
  methods: {
    updateName(name) {
      this.name = name;
    },
    updatePasword(pasword) {
      this.pasword = pasword;
    },
    updatePasword1(pasword1) {
      this.pasword1 = pasword1;
    },
    signin() {
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=signin&name=${this.name}&pasword=${this.pasword}&pasword1=${this.pasword1}`).then((response) => {
        const { data } = response;
        if (this.pasword === this.pasword1) {
          if (data.create) {
            this.error = false;
            this.$router.push({ path: '/login' });
          } else {
            this.error = 1;
          }
        } else {
          this.error = 2;
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
