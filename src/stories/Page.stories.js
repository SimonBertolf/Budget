import Page from '../components/Page.vue';

export default {
  title: 'Page',
  component: Page,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Page },
  template: '<Page>{{ content }}</Page>',
});

export const Example = Template.bind({});
Example.args = {
  content: 'content',
};
