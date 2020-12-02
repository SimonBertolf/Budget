import BackgroundMenueBig from '../components/BackgroundMenueBig.vue';

export default {
  title: 'BackgroundMenueBig',
  component: BackgroundMenueBig,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BackgroundMenueBig },
  template: '<BackgroundMenueBig><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div></BackgroundMenueBig>',
});

export const Example = Template.bind({});
Example.args = {
  content: 'Menue',
};
