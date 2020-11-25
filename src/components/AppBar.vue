<template>
  <div class="h-12 bg-blue-500 text-white flex">
    <div class="p-2 w-12" />
    <h3 class="font-bold m-auto">
      <slot />
    </h3>
    <div class="p-2 w-12">
      <LogoutSvg
        class="h-full"
        @click="logout"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import LogoutSvg from '@/assets/logout.svg';
import { firebaseAuth } from '@/firebase';
import { RouteName } from '@/router/route-name.enum';

export default defineComponent({
  name: 'AppBar',
  components: {
    LogoutSvg,
  },
  setup() {
    const router = useRouter();

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
