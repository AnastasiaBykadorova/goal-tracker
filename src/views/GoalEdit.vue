<template>
  <AppBar>New Goal</AppBar>
  <form @submit.prevent="addGoal">
    <label for="title">Title</label>
    <input
      v-model="title"
      class="border rounded"
      name="title"
      type="text"
    >
    <label for="count-per-week">Count per week</label>
    <input
      v-model.number="countPerWeek"
      class="border rounded"
      name="count-per-week"
      type="text"
    >
    <button type="submit">
      Add
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import { AppBar } from '@/components';
import { GetGoalsDocument, useAddGoalMutation } from '@/graphql/gql.generated';
import { RouteName } from '@/router/route-name.enum';

export default defineComponent({
  components: {
    AppBar,
  },
  setup() {
    const router = useRouter();

    const title = ref('');
    const countPerWeek = ref(1);

    const addGoalMutation = useAddGoalMutation({
      refetchQueries: [{
        query: GetGoalsDocument,
      }],
    });

    const addGoal = async (): Promise<void> => {
      await addGoalMutation.mutate({
        title: title.value,
        countPerWeek: countPerWeek.value,
      });

      router.push({ name: RouteName.HOME });
    };

    return {
      title,
      countPerWeek,
      addGoal,
    };
  },

});
</script>
