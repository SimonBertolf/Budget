<template>
  <div :class="classes">
    <HighlightLarge text="Budget"/>
    <div class="w-1/2 h-full bg-gray-100 justify-center ">
        <tabe>
          <tr><td>Versicherung Fz</td><td>100</td></tr>
        </tabe>
    </div>
  </div>
</template>

<script>
import HighlightLarge from './HighlightLarge.vue';

export default {
  name: 'BudgetContent',
  components: { HighlightLarge },
  computed: {
    classes() {
      return 'h-full w-full flex flex-col items-center';
    },
  },
};
</script>

<style scoped>

</style>
