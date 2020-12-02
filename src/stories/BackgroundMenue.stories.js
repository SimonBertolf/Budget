import BackgroundMenue from '../components/BackgroundMenue.vue';

export default {
  title: 'BackgroundMenue',
  component: BackgroundMenue,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BackgroundMenue },
  template: '<BackgroundMenue>{{ content }}</BackgroundMenue>',
});

export const Example = Template.bind({});
Example.args = {
  content: 'Menue',
};
