import Navigation from '../components/Navigation.vue';
import {uuid} from "vue-uuid";

export default {
  title: 'Navigation',
  component: Navigation,
};

const Template = () => ({
  components: { Navigation },
  template: '<Navigation :id="id"> {{ text }} </Navigation>',
});

export const Example = Template.bind({});
Example.args = {
	id: uuid.v4(),
	text: 'Placeholder',
};
