import Background from '../components/Background.vue';

export default {
  title: 'Background',
  component: Background,
};

const Template = () => ({
  components: { Background },
  template: '<Background><div>Links</div><div>Rechts</div></Background>',
});

export const Example = Template.bind({});
