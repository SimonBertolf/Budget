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
  text: 'Normales Kleine Highlight',
};

const TemplateColor = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HighlightSmall },
  template: '<HighlightSmall :text="text" :color="color"/>',
});

export const ExampleColor = TemplateColor.bind({});
ExampleColor.args = {
  text: 'Normales Kleine Highlight mit Farbe',
  color: 'text-orange-600',
};
