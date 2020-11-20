<template>
  <Button v-on:click.native="clickevent" :id="id" type="submit" :class="classes">{{ text }}</Button>
</template>

<script>
export default {
  name: 'ButtonRaw',
  props: {
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'text-Black',
    },
  },
  methods: {
    clickevent() {
      this.$emit('clickevent');
    },
  },
  computed: {
    classes() {
      return `p-1 rounded w-full bg-${this.color}`;
    },
  },
};
</script>

<style scoped>

</style>
