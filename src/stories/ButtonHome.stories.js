import { uuid } from 'vue-uuid';
import ButtonHome from '../components/ButtonHome.vue';

export default {
  title: 'ButtonHome',
  component: ButtonHome,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonHome },
  template: '<ButtonHome></ButtonHome>',
});

export const Example = Template.bind({});
Example.args = {
};
