<template>
  <Box>
    <HighlightMedium :text="text"/>
      <ImputBox>
        <LabledImputField
          :update-value="updateValue"
          :value="value"
          id="LoginName"
          type="number"
          text="Value"/>
        <div class="m-5" ></div>
        <LabledImputField
          update-value="updateUsage"
          value="Wird durch select ersetzt"
          id="LoginName"
          type="text"
          text="Usage"/>
        <ButtonAdd text="Add"/>
      </ImputBox>
  </Box>
</template>

<script>
import LabledImputField from './LabledImputField.vue';
import Box from './Box.vue';
import ImputBox from './ImputBox.vue';
import HighlightMedium from './HighlightMedium.vue';
import ButtonAdd from './ButtonAdd.vue';

export default {
  name: 'ImputBoxTemplate',
  components: {
    ButtonAdd, LabledImputField, Box, ImputBox, HighlightMedium,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    updateValue: {
      type: Function,
      required: true,
    },
  },
  computed: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
