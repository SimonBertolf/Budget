<template>
  <div class="flex flex-col w-full">
    <TextMedium> {{ text }} </TextMedium>
    <ImputField :id="id" :type="type"/>
  </div>
</template>

<script>
import TextMedium from './TextMedium.vue';
import ImputField from './ImputField.vue';

export default {
  name: 'LabledImputField',
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
  },
};
</script>

<style scoped>

</style>
