<template>
  <app-bar />
  <div>
    <h1>This is home page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AppBar from '@/components/AppBar.vue';

export default defineComponent({
  components: {
    AppBar,
  },

});
</script>
