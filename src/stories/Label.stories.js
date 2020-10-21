import Label from '../components/Label.vue';
import { uuid } from 'vue-uuid';

export default {
  title: 'Label',
  component: Label,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Label },
  template: '<Label :id="id">Mandant</Label>',
});

export const Example = Template.bind({});
Example.args = {
  id: uuid.v4(),
};
