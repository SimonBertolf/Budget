import TextLarge from '../components/TextLarge.vue';

export default {
  title: 'TextLarge',
  component: TextLarge,
};

const Template = () => ({
  components: { TextLarge },
  template: '<TextLarge>Normaler Grosser Text</TextLarge>',
});

export const Example = Template.bind({});
