import Background from '../components/Background.vue';

export default {
  title: 'Background',
  component: Background,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Background },
  template: '<Background><div>{{ content }}</div></Background>',
});

export const Example = Template.bind({});
Example.args = {
  content: 'content',
};
