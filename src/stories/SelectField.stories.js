import { uuid } from 'vue-uuid';
import SelectField from '../components/SelectField.vue';

export default {
  title: 'SelectField',
  component: SelectField,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SelectField },
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
  template: '<div><SelectField :id="id" :options="options" :selectedValue="value" @update-value="updateSelect"/><div>{{ value.id }}</div></div>',
});

export const Example = Template.bind({});
Example.args = {
  id: uuid.v4(),
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
