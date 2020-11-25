<template>
  <button
    class="fab focus:outline-none active:shadow-lg mouse"
  >
    <PlusSvg class="w-6 h-6 inline-block" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PlusSvg from '@/assets/icons/plus.svg';

export default defineComponent({
  name: 'Fab',
  components: {
    PlusSvg,
  },

});
</script>

<style lang="scss" scoped>
  .fab {
    @apply p-0 w-12 h-12 rounded-full shadow transition ease-in duration-200 ;
  }
</style>
