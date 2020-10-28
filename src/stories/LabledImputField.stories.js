import { uuid } from 'vue-uuid';
import LabledImputField from '../components/LabledImputField.vue';

export default {
  title: 'LabledImputField',
  component: LabledImputField,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LabledImputField },
  template: '<LabledImputField :id="id" :type="type" :text="text"/>',
});

export const Example = Template.bind({});
Example.args = {
  id: uuid.v4(),
  type: 'text',
  text: 'TestLabel',
};
