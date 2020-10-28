import { uuid } from 'vue-uuid';
import ImputField from '../components/ImputField.vue';

export default {
  title: 'ImputField',
  component: ImputField,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImputField },
  template: '<ImputField :id="id" :desc="desc" :type="type"/>',
});

export const Example = Template.bind({});
Example.args = {
  id: uuid.v4(),
  desc: '',
  type: 'text',
};
