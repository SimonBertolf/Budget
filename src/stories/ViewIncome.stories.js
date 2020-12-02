import ViewIncome from '../components/ViewIncome.vue';

export default {
  title: 'ViewIncome',
  component: ViewIncome,
};

const Template = () => ({
  components: { ViewIncome },
  template: '<ViewIncome></ViewIncome>',
});

export const Example = Template.bind({});
