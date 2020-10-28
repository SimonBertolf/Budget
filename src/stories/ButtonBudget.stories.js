import { uuid } from 'vue-uuid';
import ButtonBudget from '../components/ButtonBudget.vue';

export default {
  title: 'ButtonBudget',
  component: ButtonBudget,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonBudget },
  template: '<ButtonBudget></ButtonBudget>',
});

export const Example = Template.bind({});
Example.args = {
};
