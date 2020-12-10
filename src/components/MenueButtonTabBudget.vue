<template>
 <MenueButtonTab text-small="BU" text-big="Budget" id="IDBudget" :slide="slide"
                 :eventHandler="eventHandler"/>
</template>

<script>
import MenueButtonTab from './MenueButtonTab.vue';

export default {
  name: 'MenueButtonTabBudget',
  components: { MenueButtonTab },
  props: {
    slide: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    eventHandler() {
      this.$store.commit('setContentId', 2);
    },
  },
};
</script>

<style scoped>

</style>
