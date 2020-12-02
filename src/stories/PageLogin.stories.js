import PageLogin from '../components/PageLogin.vue';

export default {
  title: 'PageLogin',
  component: PageLogin,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageLogin },
  template: '<PageLogin></PageLogin>',
});

export const Example = Template.bind({});
Example.args = {
};
