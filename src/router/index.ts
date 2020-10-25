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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    beforeEnter: authorizedGuard,

  },
  {
    path: '/register',
    name: RouteName.REGISTER,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    beforeEnter: authorizedGuard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
