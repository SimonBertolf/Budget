import PasswordImputField from '../components/PasswordImputField.vue';

export default {
  title: 'PasswordImputField',
  component: PasswordImputField,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PasswordImputField },
  template: '<PasswordImputField :update-pasword="updatePasword" :pasword="pasword"/>',
});

export const Example = Template.bind({});
Example.args = {
  pasword: '',
  updatePasword(pasword) {
  },
};
