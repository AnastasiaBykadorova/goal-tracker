import { NavigationGuard } from 'vue-router';

import { firebaseAuth } from '@/firebase';

import { RouteName } from '../route-name.enum';

export const authorizedGuard: NavigationGuard = (to, from, next) => {
  if (firebaseAuth.currentUser) {
    next({ name: RouteName.HOME });

    return;
  }

  next();
};
