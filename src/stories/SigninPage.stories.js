import SigninPage from '../views/Signin.vue';

export default {
  title: 'SigninPage',
  component: SigninPage,
};

const Template = () => ({
  components: { SigninPage },
  template: '<SigninPage></SigninPage>',
});

export const Example = Template.bind({});
