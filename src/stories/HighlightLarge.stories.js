import HighlightLarge from '../components/HighlightLarge.vue';

export default {
  title: 'HighlightLarge',
  component: HighlightLarge,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HighlightLarge },
  template: '<HighlightLarge :text="text"/>',
});

export const Example = Template.bind({});
Example.args = {
  text: 'Normales Grosses Highlight',
};

const TemplateColor = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HighlightLarge },
  template: '<HighlightLarge :text="text" :color="color"/>',
});

export const ExampleColor = TemplateColor.bind({});
ExampleColor.args = {
  text: 'Normales Grosses Highlight mit Farbe',
  color: 'text-orange-600',
};
