<template>
  <AppBar>Home</AppBar>
  <div>
    <h1
      v-for="goal in goals"
      :key="goal.id"
    >
      Goal ID: {{ goal.id }}
      Goal Title: {{ goal.title }}
      ______________________________________________
    </h1>
  </div>
</template>

<script lang="ts">
import { useResult } from '@vue/apollo-composable';
import { defineComponent } from 'vue';

import { AppBar } from '@/components';
import { useGetGoalsQuery } from '@/graphql/gql.generated';

export default defineComponent({
  components: {
    AppBar,
  },
  setup() {
    const { result } = useGetGoalsQuery();
    const goals = useResult(result, [], (data) => data.goals);

    return {
      goals,
    };
  },
});
</script>
