import ValueImputField from '../components/ValueImputField.vue';

export default {
  title: 'ValueImputField',
  component: ValueImputField,
};

const Template = () => ({
  components: { ValueImputField },
  template: '<ValueImputField/>',
});

export const Example = Template.bind({});
Example.args = {};
