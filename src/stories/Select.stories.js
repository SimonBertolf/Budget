import Select from '../components/Select.vue';
import { uuid } from 'vue-uuid';

export default {
  title: 'Select',
  component: Select,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Select },
  template: '<Select :id="id" :options="options"/>',
});

export const Example = Template.bind({});
Example.args = {
  id: uuid.v4(),
  options: [
    'value one',
    'value two',
    'value three',
    'value four',
    'value five'
  ]
};
