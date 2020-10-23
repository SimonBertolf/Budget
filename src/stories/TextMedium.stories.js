import TextMedium from '../components/TextMedium.vue';

export default {
  title: 'TextMedium',
  component: TextMedium,
};

const Template = () => ({
  components: { TextMedium },
  template: '<TextMedium>Normaler Text</TextMedium>',
});

export const Example = Template.bind({});
