import MenueButton from '../components/MenueButton.vue';

export default {
  title: 'MenueButton',
  component: MenueButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MenueButton },
  template: '<MenueButton :value="value"/>',
});

export const Example = Template.bind({});
Example.args = {
  value: true,
};
