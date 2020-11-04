import ImputBoxTemplate from '../components/ImputBoxTemplate.vue';

export default {
  title: 'ImputBoxTemplate',
  component: ImputBoxTemplate,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImputBoxTemplate },
  template: '<ImputBoxTemplate :text="text"/>',
});

export const Example = Template.bind({});
Example.args = {
  text: 'LabelText',
};
