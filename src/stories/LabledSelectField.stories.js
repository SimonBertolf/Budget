import { uuid } from 'vue-uuid';
import LabledSelectField from '../components/LabledSelectField.vue';

export default {
  title: 'LabledSelectField',
  component: LabledSelectField,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LabledSelectField },
  data: () => ({
    value: {
      id: 0,
      label: 'value one',
    },
  }),
  methods: {
    updateSelect(value) {
      this.value = value;
    },
  },
  template: '<LabledSelectField :text="text" :id="id" :options="options" :selectedValue="value" @update-value="updateSelect"/>',
});

export const Example = Template.bind({});
Example.args = {
  id: uuid.v4(),
  text: 'TestLabel',
  options: [
    {
      id: 0,
      label: 'value one',
    },
    {
      id: 1,
      label: 'value two',
    },
    {
      id: 2,
      label: 'value three',
    },
    {
      id: 3,
      label: 'value four',
    },
    {
      id: 4,
      label: 'value five',
    },
  ],
};
