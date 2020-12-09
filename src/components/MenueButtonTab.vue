<template>
  <button :id="id" type="submit" :slide="slide" :class="classes" v-on:click="eventHandler">
    <div v-if="slide">{{ textBig }}</div>
    <div v-else>{{ textSmall }}</div>
  </button>
</template>

<script>

export default {
  name: 'MenueButtonTab',
  props: {
    textBig: {
      type: String,
      required: true,
    },
    textSmall: {
      type: String,
      required: true,
    },
    slide: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    eventHandler: {
      type: Function,
      required: true,
    },
  },
  computed: {
    classes() {
      if (this.slide) {
        return 'bg-gradient-to-r from-red-600 to-red-800 h-16 w-full text-gray-300 text-xl';
      }
      return 'bg-gradient-to-r from-red-600 to-red-800 h-20 w-full text-gray-300 font-bold text-3xl';
    },
  },
};
</script>

<style scoped>

</style>
