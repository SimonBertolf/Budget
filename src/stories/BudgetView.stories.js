import BudgetViwe from '../components/BudgetViwe.vue';

export default {
  title: 'BudgetViwe',
  component: BudgetViwe,
};

const Template = () => ({
  components: { BudgetViwe },
  template: '<BudgetViwe><div>Content</div></BudgetViwe>',
});

export const Example = Template.bind({});
