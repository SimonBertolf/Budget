import LoginImputFieldPassword from '../components/LoginImputFieldPassword.vue';

export default {
  title: 'LoginImputFieldPassword',
  component: LoginImputFieldPassword,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoginImputFieldPassword },
  template: '<LoginImputFieldPassword :update-pasword="updatePasword" :pasword="pasword"/>',
});

export const Example = Template.bind({});
Example.args = {
  pasword: '',
  updatePasword(pasword) {
  },
};
