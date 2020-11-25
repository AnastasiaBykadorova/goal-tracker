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
