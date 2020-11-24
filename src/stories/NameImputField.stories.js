import NameImputField from '../components/NameImputField.vue';

export default {
  title: 'NameImputField',
  component: NameImputField,
};

const Template = () => ({
  components: { NameImputField },
  template: '<NameImputField :update-name="updateName" :name="name"/>',
});

export const Example = Template.bind({});
Example.args = {
  name: '',
  updateName(name) {
    console.log(name);
  },
};
