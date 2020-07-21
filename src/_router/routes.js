
import Vue from 'vue';
import Router from 'vue-router';

// Program Routes
import { UXPRoutes } from '../programs/UXP/routes/routes';

Vue.use( Router );

const baseComponent = () => import('@/programs/UXP/views/Home.vue')

const allRoutes = [
  ...UXPRoutes,
  { path: '/', component: baseComponent },
  { path: '*', redirect: '/' },
];

export default new Router({
  mode: 'history',
  routes: allRoutes
});
