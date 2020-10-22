import ChartHeader from '../components/ChartHeader.vue';

export default {
  title: 'ChartHeader',
  component: ChartHeader,
};

const Template = () => ({
  components: { ChartHeader },
  template: '<ChartHeader><div><div>Wie siet die Verteilung nach ...</div><div>Klicke auf die nutzungsgruppe um ...</div></div><div>Auswal</div></ChartHeader>',
});

export const Example = Template.bind({});
