import Description from '../components/Description.vue';

export default {
  title: 'Description',
  component: Description,
};

const Template = () => ({
  components: { Description },
  template: '<Description>Bruttorendite soll am 31. Okt</Description>',
});

export const Example = Template.bind({});
