import BackgroundMenueSmall from '../components/BackgroundMenueSmall.vue';

export default {
  title: 'BackgroundMenueSmall',
  component: BackgroundMenueSmall,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BackgroundMenueSmall },
  template: '<BackgroundMenueSmall><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div></BackgroundMenueSmall>',
});

export const Example = Template.bind({});
Example.args = {
  content: 'Menue',
};
