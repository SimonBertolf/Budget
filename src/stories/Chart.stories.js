import Chart from '../components/Chart.vue';

export default {
  title: 'Chart',
  component: Chart,
};

const Template = () => ({
  components: { Chart },
  template: '<Chart></Chart>',
});

export const Example = Template.bind({});
