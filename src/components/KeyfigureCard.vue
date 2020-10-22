<template>
  <Card>
    <Highlight :text="text"/>
    <Description>{{ desc }}<HighlightSmall :text="formattedDate"/></Description>
  </Card>
</template>

<script>
import Card from './Card.vue';
import Description from './Description.vue';
import Highlight from './Highlight.vue';
import HighlightSmall from './HighlightSmall.vue';
import dateUtil from '../date_util/dateUtil';

export default {
  name: 'KeyfigureCard',
  components: {
    Card,
    Description,
    Highlight,
    HighlightSmall,
  },
  props: {
    desc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return dateUtil.formatDate(this.date);
    },
  },
};
</script>

<style scoped>

</style>
