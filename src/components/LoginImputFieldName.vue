<template>
  <LabledImputField
    :update-value="updateName"
    :value="name"
    id="LoginName"
    type="text"
    text="Name"
    colore="bg-gradient-to-r from-red-200 to-red-100"/>
</template>

<script>
import LabledImputField from './ImputFieldLabled.vue';

export default {
  name: 'LoginImputFieldName',
  components: { LabledImputField },
  props: {
    name: {
      type: String,
      required: true,
    },
    updateName: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
