<template>
  <ImputFieldLabled
    :update-value="updatePasword"
    :value="pasword"
    id="LoginPassword"
    type="password"
    text="Password"
    colore="bg-gradient-to-r from-red-200 to-red-100"
  />
</template>

<script>
import ImputFieldLabled from './ImputFieldLabled.vue';

export default {
  name: 'LoginImputFieldPassword',
  components: { ImputFieldLabled },
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
