<template>
  <form @submit.prevent="addIncomme">
    <ImputBoxTemplate text="Income" :update-value="updateValue" :value="value"/>
  </form>
</template>

<script>
import axios from 'axios';
import ImputBoxTemplate from './ImputBoxTemplate.vue';

export default {
  name: 'ImputBoxOutput',
  components: { ImputBoxTemplate },
  data: () => ({
    value: '',
    usage: '1',
  }),
  methods: {
    updateValue(value) {
      this.value = value;
    },
    updateUsage(usage) {
      this.usage = usage;
    },
    addIncomme() {
      axios.get(`http://192.168.1.140/BudgetBackend/server.php?action=addIncome&value=${this.value}&usage=${this.usage}`).then((response) => {
        const { data } = response;
        console.log(data);
      });
    },
  },
};
</script>

<style scoped>

</style>
