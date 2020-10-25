import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';

import { authorizedGuard } from './guards/authorized.guard';
import { unauthorizedGuard } from './guards/unauthorized.guard';
import { RouteName } from './route-name.enum';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.HOME,
    component: Home,
    beforeEnter: unauthorizedGuard,
  },
  {
    path: '/login',
    name: RouteName.LOGIN,
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    beforeEnter: authorizedGuard,

  },
  {
    path: '/register',
    name: RouteName.REGISTER,
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    beforeEnter: authorizedGuard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
