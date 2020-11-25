<template>
  <LabledImputField
    :update-value="updateName"
    :value="name"
    id="LoginName"
    type="text"
    text="Name"/>
</template>

<script>
import LabledImputField from './LabledImputField.vue';

export default {
  name: 'NameImportField',
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
