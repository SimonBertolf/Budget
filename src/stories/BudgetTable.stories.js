import BudgetTable from '../components/BudgetTable.vue';
import BudgetTableRow from '../components/BudgetTableRow.vue';
import BudgetTableTd from '../components/BudgetTableTd.vue';
import BudgetTableTh from '../components/BudgetTableTh.vue';

export default {
  title: 'BudgetTable',
  component: BudgetTable,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    BudgetTable,
    BudgetTableRow,
    BudgetTableTh,
    BudgetTableTd,
  },
  template: '<BudgetTable>'
    + '<thead>'
    + '<BudgetTableRow>'
    + '<BudgetTableTh>{{ content }}</BudgetTableTh>'
    + '<BudgetTableTh>{{ content }}</BudgetTableTh>'
    + '<BudgetTableTh>{{ content }}</BudgetTableTh>'
    + '<BudgetTableTh>{{ content }}</BudgetTableTh>'
    + '</BudgetTableRow>'
    + '</thead>'
    + '<BudgetTableRow>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '</BudgetTableRow>'
    + '<BudgetTableRow>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '</BudgetTableRow>'
    + '<BudgetTableRow>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '<BudgetTableTd>{{ content }}</BudgetTableTd>'
    + '</BudgetTableRow>'
    + '</BudgetTable>',
});

export const Example = Template.bind({});
Example.args = {
  content: 'content',
};
