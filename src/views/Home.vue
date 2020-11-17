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
  <Fab
    class="bg-blue-500 hover:bg-blue-600"
    @click="addGoal"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { AppBar, Fab } from '@/components';
import { useGetGoalsQuery } from '@/graphql/gql.generated';
import router from '@/router';
import { RouteName } from '@/router/route-name.enum';

export default defineComponent({
  components: {
    AppBar,
    Fab,
  },
  setup() {
    const { result } = useGetGoalsQuery();
    const addGoal = () => {
      // router.push({ name: RouteName.GOAL_EDIT });
    };

    const goals = computed(() => result.value?.goals);

    return {
      addGoal,
      goals,
    };
  },
});
</script>
