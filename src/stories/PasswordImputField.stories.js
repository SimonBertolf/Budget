import PasswordImputField from '../components/PasswordImputField.vue';

export default {
  title: 'PasswordImputField',
  component: PasswordImputField,
};

const Template = () => ({
  components: { PasswordImputField },
  template: '<PasswordImputField :update-pasword="updatePasword" :pasword="pasword"/>',
});

export const Example = Template.bind({});
Example.args = {
  pasword: 'test',
  updatePasword(pasword) {
    console.log(pasword);
  },
};
