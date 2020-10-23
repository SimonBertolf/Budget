import ContentBackground from '../components/ContentBackground.vue';

export default {
  title: 'ContentBackground',
  component: ContentBackground,
};

const Template = () => ({
  components: { ContentBackground },
  template: '<ContentBackground> <div>Titel</div> <div>Dashboard</div> <div>Budget</div> </ContentBackground>',
});

export const Example = Template.bind({});
