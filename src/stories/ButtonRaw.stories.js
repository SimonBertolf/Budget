import { uuid } from 'vue-uuid';
import ButtonRaw from '../components/ButtonRaw.vue';

export default {
  title: 'ButtonRaw',
  component: ButtonRaw,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonRaw },
  methods: {
    test() {
      console.log('sdhdhdh');
    },
    template: '<ButtonNav :id="id" :text="text" @clickevent="test" :color="color"/>',
  },
});

export const Example = Template.bind({});
Example.args = {
  id: uuid.v4(),
  text: 'Test-Button',
  color: 'red-300',
};
