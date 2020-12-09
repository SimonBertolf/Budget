<template>
  <div :class="classes">
    <HighlightLarge text="Budget"/>
    <div class="w-1/2 h-50 justify-center pt-4">
      <BudgetTableContent :data="this.data.data"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HighlightLarge from './HighlightLarge.vue';
import BudgetTableContent from './BudgetTableContent.vue';

export default {
  name: 'BudgetContent',
  components: {
    HighlightLarge, BudgetTableContent,
  },
  data: () => ({
    data: null,
  }),
  computed: {
    classes() {
      return 'h-full w-full flex flex-col items-center pt-4';
    },
  },

  mounted() {
    axios.get('http://192.168.1.140/BudgetBackend/server.php?action=showbudget').then((response) => {
      this.data = response;
    });
  },
};
</script>

<style scoped>

</style>
