<template>
  <AppBar>Home</AppBar>
  <div>
    <h1>This is home page</h1>
  </div>
  <Fab
    class="bg-blue-500 hover:bg-blue-600"
    @click="addGoal"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { AppBar, Fab } from '@/components';
import { useTestQuery } from '@/graphql/gql.generated';
import router from '@/router';
import { RouteName } from '@/router/route-name.enum';

export default defineComponent({
  components: {
    AppBar,
    Fab,
  },
  setup() {
    const some = useTestQuery();
    const addGoal = () => {
      router.push({ name: RouteName.GOAL_EDIT });
    };

    console.log(some);

    return {
      addGoal,
    };
  },
});
</script>
