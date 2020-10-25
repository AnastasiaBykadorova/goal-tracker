import { NavigationGuard } from 'vue-router';

import { getCurrentUser } from '@/firebase';

import { RouteName } from '../route-name.enum';

export const authorizedGuard: NavigationGuard = async (to, from, next) => {
  const user = await getCurrentUser();

  if (user) {
    next({ name: RouteName.HOME });

    return;
  }

  next();
};
