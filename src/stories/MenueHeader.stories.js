import MenueHeader from '../components/MenueHeader.vue';

export default {
  title: 'MenueHeader',
  component: MenueHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MenueHeader },
  template: '<MenueHeader/>',
});

export const Example = Template.bind({});
Example.args = {
};
