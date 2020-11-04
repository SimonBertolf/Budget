import ImputBoxOutput from '../components/ImputBoxOutput.vue';

export default {
  title: 'ImputBoxOutput',
  component: ImputBoxOutput,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImputBoxOutput },
  template: '<ImputBoxOutput/>',
});

export const Example = Template.bind({});
Example.args = {
};
