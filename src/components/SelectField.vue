<template>
  <div>
    <Select :id="id" class="appearance-none border border-black text-black w-full pl-1 text-sm font-hairline">
      <option class="text-sm font-hairline" v-for="option in options" :key="option">
        {{ option }}
      </option>
    </Select>
  </div>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
