<template>
  <BackgroundMenue>
    <MenueHeader :slide="slide"/>
    <MenueButtonTabDashboard :slide="slide"/>
    <MenueButtonTabBudget :slide="slide"/>
    <MenueButtonTabSettings :slide="slide"/>
  </BackgroundMenue>
</template>

<script>
import BackgroundMenue from './BackgroundMenue.vue';
import MenueHeader from './MenueHeader.vue';
import MenueButtonTabDashboard from './MenueButtonTabDashboard.vue';
import MenueButtonTabBudget from './MenueButtonTabBudget.vue';
import MenueButtonTabSettings from './MenueButtonTabSettings.vue';

export default {
  name: 'MenueContent',
  components: {
    BackgroundMenue,
    MenueHeader,
    MenueButtonTabDashboard,
    MenueButtonTabBudget,
    MenueButtonTabSettings,
  },
  props: {
    slide: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
