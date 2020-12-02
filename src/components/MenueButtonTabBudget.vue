<template>
 <MenueButtonTab text-small="BU" text-big="Budget" id="IDBudget" :slide="slide" />
</template>

<script>
import MenueButtonTab from './MenueButtonTab.vue';

export default {
  name: 'MenueButtonTabBudget',
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
