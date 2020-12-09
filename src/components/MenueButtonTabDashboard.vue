<template>
 <MenueButtonTab text-small="DB" text-big="Dashboard" id="IDDasboard" :slide="slide"
                 :eventHandler="eventHandler"/>
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
  methods: {
    eventHandler() {
      console.log(this.$store);
      this.$router.push({ path: '/dashboard' });
    },
  },
};
</script>

<style scoped>

</style>
