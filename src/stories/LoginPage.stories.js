import LoginPage from '../components/LoginPage.vue';

export default {
  title: 'LoginPage',
  component: LoginPage,
};

const Template = () => ({
  components: { LoginPage },
  template: '<LoginPage></LoginPage>',
});

export const Example = Template.bind({});
