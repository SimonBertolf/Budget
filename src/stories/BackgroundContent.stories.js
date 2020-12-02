import BackgroundContent from '../components/BackgroundContent.vue';

export default {
  title: 'BackgroundContent',
  component: BackgroundContent,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BackgroundContent },
  template: '<BackgroundContent><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div></BackgroundContent>',
});

export const Example = Template.bind({});
Example.args = {
  content: 'content',
};
