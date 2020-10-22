import ChartTitle from '../components/ChartTitle.vue';

export default {
  title: 'ChartTitle',
  component: ChartTitle,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ChartTitle },
  template: '<ChartTitle>Wie Sieht das Ding aus </ChartTitle>',
});

export const Example = Template.bind({});
