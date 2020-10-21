import Title from '../components/Title.vue';

export default {
  title: 'Title',
  component: Title,
};

const Template = () => ({
  components: { Title },
  template: '<Title/>',
});

export const Example = Template.bind({});
