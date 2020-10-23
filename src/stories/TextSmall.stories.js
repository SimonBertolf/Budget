import TextSmall from '../components/TextSmall.vue';

export default {
  title: 'TextSmall',
  component: TextSmall,
};

const Template = () => ({
  components: { TextSmall },
  template: '<TextSmall>Normaler kleiner Text</TextSmall>',
});

export const Example = Template.bind({});
