import ImputBoxIncome from '../components/ImputBoxIncome.vue';

export default {
  title: 'ImputBoxIncome',
  component: ImputBoxIncome,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImputBoxIncome },
  template: '<ImputBoxIncome/>',
});

export const Example = Template.bind({});
Example.args = {
};
