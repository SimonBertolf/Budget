<template>
  <Background>
    <div class="flex flex-col content-start h-full w-1/3 p-10 items-center ">
      <HighlightLarge text="Budget-Calculator-3000" color="text-red-700"/>
      <div class="p-3"></div>
      <MainContentCard>
        <TextMedium>Budget</TextMedium>
        <div class="flex justify-around h-full">
          <ViewIncome/>
          <ViewOutput/>
        </div>
        <TextMedium>Total Gewin / Verlust:</TextMedium>
      </MainContentCard>
    </div>
  </Background>
</template>

<script>
import ViewIncome from './ViewIncome.vue';
import ViewOutput from './ViewOutput.vue';
import MainContentCard from './MainContentCard.vue';
import HighlightLarge from './HighlightLarge.vue';
import Background from './Background.vue';
import TextMedium from './TextMedium.vue';

export default {
  name: 'BudgetView',
  components: {
    HighlightLarge, Background, MainContentCard, ViewIncome, ViewOutput, TextMedium,
  },
};
</script>

<style scoped>

</style>
