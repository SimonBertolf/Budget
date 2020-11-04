import Box from '../components/Box.vue';

export default {
  title: 'Box',
  component: Box,
};

const Template = () => ({
  components: { Box },
  template: '<Box><div>Beschribung</div><div>imput dinger dfsf</div></Box>',
});

export const Example = Template.bind({});
