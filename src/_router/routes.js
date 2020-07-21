
import Vue from 'vue';
import Router from 'vue-router';

// Program Routes
import { UXPRoutes } from '../programs/UXP/routes/routes';

Vue.use( Router );

const allRoutes = [ ...UXPRoutes ];

// catch all route
allRoutes.push({ path: '*', redirect: '/protokit/' })

console.log('allRoutes >',allRoutes)

export default new Router({
  mode: 'history',
  routes: allRoutes
});
