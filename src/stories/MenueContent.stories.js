import MenueContent from '../components/MenueContent.vue';

export default {
  title: 'MenueContent',
  component: MenueContent,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MenueContent },
  template: '<MenueContent :slide="slide"/>',
});

export const Example = Template.bind({});
Example.args = {
  slide: false,
};
