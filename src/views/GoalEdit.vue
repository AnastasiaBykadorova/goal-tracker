<template>
  <AppBar>New Goal</AppBar>
  <form @submit.prevent="logTitleAndCount">
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

export default defineComponent({
  components: {
    AppBar,
  },
  setup() {
    const title = ref('');
    const countPerWeek = ref<number | null>(null);

    const logTitleAndCount = () => {
      console.log(title.value, countPerWeek.value);
    };

    return {
      title,
      countPerWeek,
      logTitleAndCount,
    };
  },

});
</script>

<style>

</style>
