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
      this.$store.commit('setContentId', 0);
    },
  },
};
</script>

<style scoped>

</style>
