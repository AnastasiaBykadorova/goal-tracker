<template>
  <div class="h-12 bg-blue-500 text-white flex justify-end">
    <button
      class="px-4"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { firebaseAuth } from '@/firebase';
import router from '@/router';
import { RouteName } from '@/router/route-name.enum';

export default defineComponent({
  name: 'AppBar',
  setup() {
    const logout = async () => {
      await firebaseAuth.signOut();

      router.push({ name: RouteName.LOGIN });
    };

    return {
      logout,
    };
  },

});
</script>

<style>

</style>
