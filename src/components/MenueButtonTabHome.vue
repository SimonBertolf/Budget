<template>
 <MenueButtonTab text-small="HO" text-big="Home" id="IDBudget" :slide="slide"
                 :eventHandler="eventHandler"/>
</template>

<script>
import MenueButtonTab from './MenueButtonTab.vue';

export default {
  name: 'MenueButtonTabHome',
  components: { MenueButtonTab },
  props: {
    slide: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    eventHandler() {
      this.$store.commit('setUser', null);
      this.$router.push({ path: '/home' });
    },
  },
};
</script>

<style scoped>

</style>
