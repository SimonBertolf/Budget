import GrossYieldCard from '../components/GrossYieldCard.vue';

export default {
  title: 'GrossYieldCard',
  component: GrossYieldCard,
};

const Template = () => ({
  components: { GrossYieldCard },
  template: '<GrossYieldCard />',
});

export const Example = Template.bind({});
