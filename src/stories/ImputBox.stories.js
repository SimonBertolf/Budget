import ImputBox from '../components/ImputBox.vue';

export default {
  title: 'ImputBox',
  component: ImputBox,
};

const Template = () => ({
  components: { ImputBox },
  template: '<ImputBox><div>Value</div><div>Usage</div><div>Turnus</div></ImputBox>',
});

export const Example = Template.bind({});
