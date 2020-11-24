<template>
  <LabledImputField update-value="updateName" :value="pasword" id="LoginPassword" type="password" text="Password"/>
</template>

<script>
import LabledImputField from './LabledImputField.vue';

export default {
  name: 'PasswordImputField',
  components: { LabledImputField },
  props: {
    pasword: {
      type: String,
      required: true,
    },
    updatePasword: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
