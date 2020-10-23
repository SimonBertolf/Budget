import HighlightMedium from '../components/HighlightMedium.vue';

export default {
  title: 'HighlightMedium',
  component: HighlightMedium,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HighlightMedium },
  template: '<HighlightMedium :text="text"/>',
});

export const Example = Template.bind({});
Example.args = {
  text: 'Normales Highlight',
};

const TemplateColor = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HighlightMedium },
  template: '<HighlightMedium :text="text" :color="color"/>',
});

export const ExampleColor = TemplateColor.bind({});
ExampleColor.args = {
  text: 'Normales Highlight mit Farbe',
  color: 'text-orange-600',
};
