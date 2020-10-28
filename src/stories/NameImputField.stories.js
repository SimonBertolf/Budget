import NameImputField from '../components/NameImputField.vue';

export default {
  title: 'NameImputField',
  component: NameImputField,
};

const Template = () => ({
  components: { NameImputField },
  template: '<NameImputField/>',
});

export const Example = Template.bind({});
Example.args = {};
