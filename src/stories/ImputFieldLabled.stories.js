import { uuid } from 'vue-uuid';
import ImputFieldLabled from '../components/ImputFieldLabled.vue';

export default {
  title: 'ImputFieldLabled',
  component: ImputFieldLabled,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImputFieldLabled },
  template: '<ImputFieldLabled :update-value="updateValue" :value="value" :id="id" :type="type" :text="text"/>',
});

export const Example = Template.bind({});
Example.args = {
  id: uuid.v4(),
  type: 'text',
  text: 'TestLabel',
  value: '',
  updateValue(value) {
  },
};
