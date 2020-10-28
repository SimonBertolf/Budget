<template>
  <LoginCard>
    <HighlightMedium text="Log-In"/>
    <NameImputField/>
    <PasswordImputField/>
  </LoginCard>
</template>

<script>
import LoginCard from './LoginCard.vue';
import NameImputField from './NameImputField.vue';
import PasswordImputField from './PasswordImputField.vue';
import HighlightMedium from './HighlightMedium.vue';

export default {
  name: 'LoginCardContent',
  components: {
    LoginCard, NameImputField, PasswordImputField, HighlightMedium,
  },
};
</script>

<style scoped>

</style>
