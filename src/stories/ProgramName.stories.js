import ProgramName from '../components/ProgramName.vue';

export default {
  title: 'ProgramName',
  component: ProgramName,
};

const Template = () => ({
  components: { ProgramName },
  template: '<ProgramName>ProgramName</ProgramName>',
});

export const Example = Template.bind({});
