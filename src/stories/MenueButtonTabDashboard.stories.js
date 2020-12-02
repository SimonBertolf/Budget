import MenueButtonTabDashboard from '../components/MenueButtonTabDashboard.vue';

export default {
  title: 'MenueButtonTabDashboard',
  component: MenueButtonTabDashboard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MenueButtonTabDashboard },
  template: '<MenueButtonTabDashboard :slide="slide" :text-big="textBig" :text-small="textSmall" :id="id"/>',
});

export const Example = Template.bind({});
Example.args = {
  slide: true,
};
