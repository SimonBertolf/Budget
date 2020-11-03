import { uuid } from 'vue-uuid';
import Select from '../components/Select.vue';

export default {
  title: 'Select',
  component: Select,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Select },
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
  template: '<div><Select :id="id" :options="options" :selectedValue="value" @update-value="updateSelect"/><div>{{ value.id }}</div></div>',
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

const TemplateManyOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Select },
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
  template: '<div><Select :id="id" :options="options" :selectedValue="value" @update-value="updateSelect"/><div>{{ value.id }}</div></div>',
});

export const ExampleManyOptions = TemplateManyOptions.bind({});
ExampleManyOptions.args = {
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
    {
      id: 5,
      label: 'value one',
    },
    {
      id: 6,
      label: 'value two',
    },
    {
      id: 7,
      label: 'value three',
    },
    {
      id: 8,
      label: 'value four',
    },
    {
      id: 9,
      label: 'value five',
    },
    {
      id: 10,
      label: 'value one',
    },
    {
      id: 11,
      label: 'value two',
    },
    {
      id: 12,
      label: 'value three',
    },
    {
      id: 13,
      label: 'value four',
    },
    {
      id: 14,
      label: 'value five',
    },
    {
      id: 15,
      label: 'value one',
    },
    {
      id: 16,
      label: 'value two',
    },
    {
      id: 17,
      label: 'value three',
    },
    {
      id: 18,
      label: 'value four',
    },
    {
      id: 19,
      label: 'value five',
    },
    {
      id: 20,
      label: 'value one',
    },
    {
      id: 21,
      label: 'value two',
    },
    {
      id: 22,
      label: 'value three',
    },
    {
      id: 23,
      label: 'value four',
    },
    {
      id: 24,
      label: 'value five',
    },
    {
      id: 25,
      label: 'value one',
    },
    {
      id: 26,
      label: 'value two',
    },
    {
      id: 27,
      label: 'value three',
    },
    {
      id: 28,
      label: 'value four',
    },
    {
      id: 29,
      label: 'value five',
    },
    {
      id: 30,
      label: 'value one',
    },
    {
      id: 31,
      label: 'value two',
    },
    {
      id: 32,
      label: 'value three',
    },
    {
      id: 33,
      label: 'value four',
    },
    {
      id: 34,
      label: 'value five',
    },
    {
      id: 35,
      label: 'value one',
    },
    {
      id: 36,
      label: 'value two',
    },
    {
      id: 37,
      label: 'value three',
    },
    {
      id: 38,
      label: 'value four',
    },
    {
      id: 39,
      label: 'value five',
    },
  ],
};
