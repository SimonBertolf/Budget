<template>
 <MenueButtonTab text-small="LO" text-big="Log-Out"
                 id="IDLogout" :slide="slide"
                 :eventHandler="eventHandler"
 />
</template>

<script>
import MenueButtonTab from './MenueButtonTab.vue';

export default {
  name: 'MenueButtonTabLogout',
  components: { MenueButtonTab },
  props: {
    slide: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    eventHandler() {
      this.$router.push({ path: '/login' });
    },
  },
};
</script>

<style scoped>

</style>
