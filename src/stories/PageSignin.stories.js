import PageSignin from '../components/PageSignin.vue';

export default {
  title: 'PageSignin',
  component: PageSignin,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageSignin },
  template: '<PageSignin></PageSignin>',
});

export const Example = Template.bind({});
Example.args = {
};
