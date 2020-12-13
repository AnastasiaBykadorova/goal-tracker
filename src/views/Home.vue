<template>
  <AppBar>Home</AppBar>
  <div>
    <h1
      v-for="goal in goals"
      :key="goal.id"
    >
      Goal ID: {{ goal.id }}
      Goal Title: {{ goal.title }}
      Goal Count Per Week: {{ goal.countPerWeek }}
      ______________________________________________
    </h1>
  </div>
</template>

<script lang="ts">
import { useResult } from '@vue/apollo-composable';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import { AppBar } from '@/components';
import { useGetGoalsQuery } from '@/graphql/gql.generated';
import { RouteName } from '@/router/route-name.enum';

export default defineComponent({
  components: {
    AppBar,
  },
  setup() {
    const router = useRouter();
    const { result } = useGetGoalsQuery();

    const addGoal = (): void => {
      router.push({ name: RouteName.GOAL_EDIT });
    };
    const goals = useResult(result, [], (data) => data.goals);

    return {
      addGoal,
      goals,
    };
  },
});
</script>
