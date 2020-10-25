<template>
  <button @click="someFunc">
    CLICK
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['emit-something'],

  setup(props, context) {
    const someFunc = () => {
      context.emit('emit-something');
    };

    return {
      someFunc,
    };
  },

});
</script>

<style>

</style>
