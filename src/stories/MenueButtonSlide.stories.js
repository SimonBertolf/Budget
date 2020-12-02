import MenueButtonSlide from '../components/MenueButtonSlide.vue';

export default {
  title: 'MenueButtonSlide',
  component: MenueButtonSlide,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MenueButtonSlide },
  template: '<MenueButtonSlide :value="value"/>',
});

export const Example = Template.bind({});
Example.args = {
  value: true,
};
