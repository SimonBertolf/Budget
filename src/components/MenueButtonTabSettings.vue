<template>
 <MenueButtonTab text-small="SE" text-big="Settings" id="IDSettings" :slide="slide"
                 :eventHandler="eventHandler" />
</template>

<script>
import MenueButtonTab from './MenueButtonTab.vue';

export default {
  name: 'MenueButtonTabSettings',
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
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style scoped>

</style>
