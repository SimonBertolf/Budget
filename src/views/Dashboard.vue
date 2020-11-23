<template>
  <AppLayout v-if="itsUser">
    <HeaderTemplate />
    <SelectorsTemplate />
    <KeyfiguresTemplate />
    <ChartsTemplate />
  </AppLayout>
</template>

<script>
import AppLayout from '../components/AppLayout.vue';
import HeaderTemplate from '../components/HeaderTemplate.vue';
import SelectorsTemplate from '../components/SelectorsTemplate.vue';
import KeyfiguresTemplate from '../components/KeyfiguresTemplate.vue';
import ChartsTemplate from '../components/ChartsTemplate.vue';

export default {
  name: 'Dashboard',
  components: {
    AppLayout,
    HeaderTemplate,
    SelectorsTemplate,
    KeyfiguresTemplate,
    ChartsTemplate,
  },
  computed: {
    itsUser() {
      return this.$store.state.user.user;
    },
  },
};
</script>

<style scoped>

</style>
