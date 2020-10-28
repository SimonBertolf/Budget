import LoginCardContent from '../components/LoginCardContent.vue';

export default {
  title: 'LoginCardContent',
  component: LoginCardContent,
};

const Template = () => ({
  components: { LoginCardContent },
  template: '<LoginCardContent></LoginCardContent>',
});

export const Example = Template.bind({});
