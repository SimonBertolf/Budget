import DonutChart from '../components/DonutChart.vue';

export default {
  title: 'DonutChart',
  component: DonutChart,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DonutChart },
  template: '<DonutChart :data="data" :value="value" :category="category" :label-value="labelValue" :label-text="labelText"/>',
});

export const Example = Template.bind({});
Example.args = {
  value: 'litres',
  category: 'country',
  data: [
    {
      'country': 'Lithuania',
      'litres': 501.9
    },
    {
      'country': 'Czech Republic',
      'litres': 301.9
    },
  ],
  labelValue: '12100000',
  labelText: 'Gesamtertrag',
};
