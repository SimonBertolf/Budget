<template>
 <MenueButtonTab text-small="DB" text-big="Dashboard" id="IDDasboard" :slide="slide" />
</template>

<script>
import MenueButtonTab from './MenueButtonTab.vue';

export default {
  name: 'MenueButtonTabDashboard',
  components: { MenueButtonTab },
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
