import BackgroundMenueBig from '../components/BackgroundMenueBig.vue';

export default {
  title: 'BackgroundMenueBig',
  component: BackgroundMenueBig,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BackgroundMenueBig },
  template: '<BackgroundMenueBig>{{ content }}</BackgroundMenueBig>',
});

export const Example = Template.bind({});
Example.args = {
  content: 'Menue',
};
