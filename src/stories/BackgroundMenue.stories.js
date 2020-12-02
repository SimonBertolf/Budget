import BackgroundMenue from '../components/BackgroundMenue.vue';

export default {
  title: 'BackgroundMenue',
  component: BackgroundMenue,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BackgroundMenue },
  template: '<BackgroundMenue><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div><div class="h-10 w-10 bg-red-300">{{ content }}</div></BackgroundMenue>',
});

export const Example = Template.bind({});
Example.args = {
  content: 'Menue',
};
