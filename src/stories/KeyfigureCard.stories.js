import KeyfigureCard from '../components/KeyfigureCard.vue';

export default {
  title: 'KeyfigureCard',
  component: KeyfigureCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KeyfigureCard },
  template: '<KeyfigureCard :text="text" :date="date" :desc="desc"/>',
});

export const Example = Template.bind({});
Example.args = {
  text: 0.0467,
  date: new Date(),
  desc: 'Bruttorendite Test ',
};
