<template>
  <div class="flex flex-col">
    <TextMedium> {{ text }} </TextMedium>
    <Select :id="id" :options="options" :selectedValue="value" @update-value="updateSelect"/>
  </div>
</template>

<script>
import TextMedium from './TextMedium.vue';
import Select from './Select.vue';

export default {
  name: 'LabledSelectField',
  components: { TextMedium, Select },
  props: {
    text: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    selectedValue: {
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
