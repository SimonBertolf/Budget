import ViewOutput from '../components/ViewOutput.vue';

export default {
  title: 'ViewOutput',
  component: ViewOutput,
};

const Template = () => ({
  components: { ViewOutput },
  template: '<ViewOutput><div>Content</div></ViewOutput>',
});

export const Example = Template.bind({});
