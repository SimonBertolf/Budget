<template>
  <BackgroundMenueSmall>
    <MenueHeader :slide="slide"/>
    <MenueButtonTabDashboard :slide="slide"/>
    <MenueButtonTabBudget :slide="slide"/>
    <MenueButtonTabSettings :slide="slide"/>
  </BackgroundMenueSmall>
</template>

<script>
import BackgroundMenueSmall from './BackgroundMenueSmall.vue';
import MenueHeader from './MenueHeader.vue';
import MenueButtonTabDashboard from './MenueButtonTabDashboard.vue';
import MenueButtonTabBudget from './MenueButtonTabBudget.vue';
import MenueButtonTabSettings from './MenueButtonTabSettings.vue';

export default {
  name: 'MenueContent',
  components: {
    BackgroundMenueSmall,
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
