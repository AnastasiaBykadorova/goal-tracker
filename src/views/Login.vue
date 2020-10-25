<template>
  <form
    class="flex flex-col"
    @submit.prevent="logInputData"
  >
    <input
      v-model="login"
      class="border rounded"
      type="text"
      placeholder="e-mail"
    >
    <input
      v-model="password"
      class="border rounded"
      type="text"
      placeholder="password"
    >
    <button
      class="block font-bold py-2 px-4 bg-blue-500 text-white rounded"
      type="submit"
    >
      Login
    </button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  setup() {
    const login = ref('');
    const password = ref('');
    const logInputData = () => {
      console.log(login.value, password.value);
    };

    return {
      logInputData,
      login,
      password,
    };
  },

});
</script>
