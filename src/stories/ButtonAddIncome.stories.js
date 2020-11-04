import ButtonAddIncome from '../components/ButtonAddIncome.vue';

export default {
  title: 'ButtonAddIncome',
  component: ButtonAddIncome,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonAddIncome },
  template: '<ButtonAddIncome></ButtonAddIncome>',
});

export const Example = Template.bind({});
Example.args = {
};
