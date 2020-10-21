import GrossYieldCardComponent from '../components/GrossYieldCardComponent.vue';

export default {
  title: 'GrossYieldCardComponent',
  component: GrossYieldCardComponent,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GrossYieldCardComponent },
  template: '<GrossYieldCardComponent :gross-yield="grossYield" :date="date"/>',
});

export const Example = Template.bind({});
Example.args = {
  grossYield: 0.0467,
  date: new Date(),
};
