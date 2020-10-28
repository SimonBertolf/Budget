import ButtonLogin from '../components/ButtonLogin.vue';

export default {
  title: 'ButtonLogin',
  component: ButtonLogin,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonLogin },
  template: '<ButtonLogin></ButtonLogin>',
});

export const Example = Template.bind({});
Example.args = {
};
