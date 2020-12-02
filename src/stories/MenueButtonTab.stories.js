import MenueButtonTab from '../components/MenueButtonTab.vue';

export default {
  title: 'MenueButtonTab',
  component: MenueButtonTab,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MenueButtonTab },
  template: '<MenueButtonTab :slide="slide" :text-big="textBig" :text-small="textSmall" :id="id"/>',
});

export const Example = Template.bind({});
Example.args = {
  slide: false,
  textBig: 'TestButton',
  textSmall: 'TB',
  id: 'IDTestButton',
};
