import HighlightSmall from '../components/HighlightSmall.vue';

export default {
  title: 'HighlightSmall',
  component: HighlightSmall,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HighlightSmall },
  template: '<HighlightSmall :text="text"/>',
});

export const Example = Template.bind({});
Example.args = {
  text: '31. Okt',
};
