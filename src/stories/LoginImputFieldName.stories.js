import LoginImputFieldName from '../components/LoginImputFieldName.vue';

export default {
  title: 'LoginImputFieldName',
  component: LoginImputFieldName,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoginImputFieldName },
  template: '<LoginImputFieldName :update-name="updateName" :name="name"/>',
});

export const Example = Template.bind({});
Example.args = {
  name: '',
  updateName(name) {
  },
};
