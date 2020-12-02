<template>
 <MenueButtonTab text-small="SE" text-big="Settings" id="IDSettings" :slide="slide" />
</template>

<script>
import MenueButtonTab from './MenueButtonTab.vue';

export default {
  name: 'MenueButtonTabSettings',
  components: { MenueButtonTab },
  props: {
    slide: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>

</style>
