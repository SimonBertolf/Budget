<template>
  <Card>
    <Highlight :text='formattedGrossYield'/>
    <Description>Bruttorendite (Soll) am <HighlightSmall :text='formattedDate'/></Description>
  </Card>
</template>

<script>
import Card from './Card.vue';
import Description from './Description.vue';
import Highlight from './Highlight.vue';
import HighlightSmall from './HighlightSmall.vue';
import dateUtil from '../date_util/dateUtil';

export default {
  name: 'GrossYieldCardComponent',
  components: {
    Card,
    Description,
    Highlight,
    HighlightSmall,
  },
  props: {
    grossYield: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  computed: {
    formattedGrossYield() {
      const grossYield = this.grossYield * 100;
      return `${grossYield}%`;
    },
    formattedDate() {
      console.log(this.date);
      return dateUtil.formatDate(this.date);
    },
  },
};
</script>

<style scoped>

</style>
