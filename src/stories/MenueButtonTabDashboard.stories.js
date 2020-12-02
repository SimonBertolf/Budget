import MenueButtonTabDashboard from '../components/MenueButtonTabDashboard.vue';

export default {
  title: 'MenueButtonTabDashboard',
  component: MenueButtonTabDashboard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MenueButtonTabDashboard },
  template: '<MenueButtonTabDashboard :slide="slide"/>',
});

export const Example = Template.bind({});
Example.args = {
  slide: true,
};
