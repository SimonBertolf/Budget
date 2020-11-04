<template>
  <Box>
    <HighlightMedium :text="text"/>
    <ImputBox>
      <div>Value</div><div>Usage</div><div>Turnus</div>
    </ImputBox>
  </Box>
</template>

<script>
import Box from './Box.vue';
import ImputBox from './ImputBox.vue';
import HighlightMedium from './HighlightMedium.vue';

export default {
  name: 'ImputBoxTemplate',
  components: { Box, ImputBox, HighlightMedium },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
