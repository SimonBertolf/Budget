import LoginCard from '../components/LoginCard.vue';

export default {
  title: 'LoginCard',
  component: LoginCard,
};

const Template = () => ({
  components: { LoginCard },
  template: '<LoginCard> <div>Titel</div> <div>Dashboard</div> <div>Budget</div> </LoginCard>',
});

export const Example = Template.bind({});
