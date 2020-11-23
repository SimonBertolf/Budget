import { uuid } from 'vue-uuid';
import ButtonNav from '../components/ButtonRaw.vue';

export default {
  title: 'ButtonNav',
  component: ButtonNav,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonNav },
  template: '<ButtonNav :id="id"> {{ text }} </ButtonNav>',
});

export const Example = Template.bind({});
Example.args = {
  id: uuid.v4(),
  text: 'Test-Button',
};
