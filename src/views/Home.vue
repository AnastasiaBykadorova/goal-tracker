<template>
  <app-bar />
  <div>
    <h1>This is home page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AppBar from '@/components/AppBar.vue';
import { useTestQuery } from '@/graphql/gql.generated';

export default defineComponent({
  components: {
    AppBar,
  },
  setup() {
    const some = useTestQuery();

    console.log(some);
  },
});
</script>
