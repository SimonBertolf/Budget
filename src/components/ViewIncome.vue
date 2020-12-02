<template>
  <p>Test</p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ViewIncome',
  async created() {
    axios.get('http://192.168.1.140/BudgetBackend/server.php?action=test&tot=tut').then((response) => {
      const { data } = response;
      console.log(data);
    });
  },
};

</script>

<style scoped>

</style>
