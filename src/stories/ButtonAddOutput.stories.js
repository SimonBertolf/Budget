import ButtonAddOutput from '../components/ButtonAddOutput.vue';

export default {
  title: 'ButtonAddOutput',
  component: ButtonAddOutput,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonAddOutput },
  template: '<ButtonAddOutput></ButtonAddOutput>',
});

export const Example = Template.bind({});
Example.args = {
};
