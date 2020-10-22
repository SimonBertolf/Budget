import KeyfigurePercentCard from '../components/KeyfigurePercentCard.vue';

export default {
  title: 'KeyfigurePercentCard',
  component: KeyfigurePercentCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KeyfigurePercentCard },
  template: '<KeyfigurePercentCard :value="text" :date="date" :desc="desc"/>',
});

export const Example = Template.bind({});
Example.args = {
  text: 0.0467,
  date: new Date(),
  desc: 'Bruttorendite Test ',
};
