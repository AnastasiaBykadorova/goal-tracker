<template>
  <div class="h-12 bg-blue-500 text-white flex justify-end">
    <LogoutSvg
      class="h-full p-2"
      @click="logout"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LogoutSvg from '@/assets/logout.svg';
import { firebaseAuth } from '@/firebase';
import router from '@/router';
import { RouteName } from '@/router/route-name.enum';

export default defineComponent({
  name: 'AppBar',
  components: {
    LogoutSvg,
  },
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
