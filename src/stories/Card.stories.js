import Card from '../components/Card.vue';

export default {
  title: 'Card',
  component: Card,
};

const Template = () => ({
  components: { Card },
  template: '<Card><span>4.67%</span><span>Bruttorendite am 31.Okt</span></Card>',
});

export const Example = Template.bind({});
