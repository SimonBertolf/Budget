import { uuid } from 'vue-uuid';
import SelectField from '../components/SelectField.vue';

export default {
  title: 'SelectField',
  component: SelectField,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SelectField },
  template: '<SelectField :id="id" :options="options"/>',
});

export const Example = Template.bind({});
Example.args = {
  id: uuid.v4(),
  options: [
    '- - -',
    'Benzien',
    'Essen',
    'Auto',
    'Haus',
    'Diverses',
  ],
};
