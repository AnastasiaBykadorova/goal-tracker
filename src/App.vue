<template>
  <router-view />
</template>
<script lang="ts">
import { DefaultApolloClient } from '@vue/apollo-composable';
import { defineComponent, provide } from 'vue';

import { apolloClient } from './graphql/client';

export default defineComponent({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
