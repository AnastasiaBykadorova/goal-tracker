import { NavigationGuard } from 'vue-router';

import { getCurrentUser } from '@/firebase';

import { RouteName } from '../route-name.enum';

export const unauthorizedGuard: NavigationGuard = async (to, from, next) => {
  const user = await getCurrentUser();

  if (!user) {
    next({ name: RouteName.LOGIN });

    return;
  }

  next();
};
