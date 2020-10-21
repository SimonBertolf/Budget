import Highlight from '../components/Highlight.vue';

export default {
  title: 'Highlight',
  component: Highlight,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Highlight },
  template: '<Highlight :text="text"/>',
});

export const Example = Template.bind({});
Example.args = {
  text: '4.67%',
};
