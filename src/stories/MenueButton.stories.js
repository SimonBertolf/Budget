import MenueButton from '../components/MenueButton.vue';

export default {
  title: 'MenueButton',
  component: MenueButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MenueButton },
  template: '<MenueButton> {{ text }} </MenueButton>',
});

export const Example = Template.bind({});
Example.args = {
  text: '...',
};
