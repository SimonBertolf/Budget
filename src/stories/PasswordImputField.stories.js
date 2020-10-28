import PasswordImputField from '../components/PasswordImputField.vue';

export default {
  title: 'PasswordImputField',
  component: PasswordImputField,
};

const Template = () => ({
  components: { PasswordImputField },
  template: '<PasswordImputField/>',
});

export const Example = Template.bind({});
Example.args = {};
