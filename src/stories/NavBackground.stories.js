import NavBackground from '../components/NavBackground.vue';

export default {
  title: 'NavBackground',
  component: NavBackground,
};

const Template = () => ({
  components: { NavBackground },
  template: '<NavBackground> <div>Titel</div> <div>Dashboard</div> <div>Budget</div> </NavBackground>',
});

export const Example = Template.bind({});
