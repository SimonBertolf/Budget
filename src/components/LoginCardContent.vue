<template>
  <LoginCard>
    <HighlightMedium text="Log-In"/>
    <div class="justify-around">
      <NameImputField/>
      <PasswordImputField/>
      <br>
      <ButtonLogin/>
    </div>
  </LoginCard>
</template>

<script>
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
};
</script>

<style scoped>

</style>
