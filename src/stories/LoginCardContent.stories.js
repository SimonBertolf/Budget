import LoginCardContent from '../components/LoginCardContent.vue';

export default {
  title: 'LoginCardContent',
  component: LoginCardContent,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoginCardContent },
  template: '<LoginCardContent></LoginCardContent>',
});

export const Example = Template.bind({});
Example.args = {
};
