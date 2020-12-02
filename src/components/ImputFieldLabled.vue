<template>
  <div class="flex flex-col w-full justify-start">
    <TextMedium> {{ text }} </TextMedium>
    <ImputField @custom-imput="updateValue" :value="value" :id="id" :type="type" :color="colore"/>
  </div>
</template>

<script>
import TextMedium from './TextMedium.vue';
import ImputField from './ImputField.vue';

export default {
  name: 'ImputFieldLabled',
  components: { TextMedium, ImputField },
  props: {
    text: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    updateValue: {
      type: Function,
      required: true,
    },
    colore: {
      type: String,
      default: 'bg-gray-100',
    },
  },
};
</script>

<style scoped>

</style>
