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

import { AppBar } from '@/components';
import { useAddGoalMutation } from '@/graphql/gql.generated';

export default defineComponent({
  components: {
    AppBar,
  },
  setup() {
    const addGoalMutation = useAddGoalMutation();

    const title = ref('');
    const countPerWeek = ref<number | null>(null);

    const addGoal = async () => {
      const { data } = await addGoalMutation.mutate();

      console.log(data);
    };

    return {
      title,
      countPerWeek,
      addGoal,
    };
  },

});
</script>

<style>

</style>
