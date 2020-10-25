<template>
  <h2>Login</h2>
  <form
    class="flex flex-col"
    @submit.prevent="login"
  >
    <input
      v-model="email"
      class="border rounded"
      type="email"
      placeholder="e-mail"
    >
    <input
      v-model="password"
      class="border rounded"
      type="password"
      placeholder="password"
    >
    <button
      class="block font-bold py-2 px-4 bg-blue-500 text-white rounded"
      type="submit"
    >
      Login
    </button>
  </form>
  <router-link :to="{ name: RouteName.REGISTER }">
    or register
  </router-link>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

import { firebaseAuth } from '@/firebase';
import router from '@/router';
import { RouteName } from '@/router/route-name.enum';

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const login = async () => {
      await firebaseAuth.signInWithEmailAndPassword(email.value, password.value);

      router.push('/');
    };

    return {
      email,
      login,
      password,
      RouteName,
    };
  },

});
</script>
