import BackgroundLogin from '../components/BackgroundLogin.vue';

export default {
  title: 'BackgroundLogin',
  component: BackgroundLogin,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BackgroundLogin },
  template: '<BackgroundLogin></BackgroundLogin>',
});

export const Example = Template.bind({});
Example.args = {
};
