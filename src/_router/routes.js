

import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../views/Home');
const Boilerplate = () => import('../views/Boilerplate');
const ModalGrowl = () => import('../views/demos/Modal-Growl');
const Table = () => import('../views/demos/Table');
const ReportsOverview = () => import('../views/reports/Overview');
const InvestmentPlacement = () => import('../views/reports/Investment-Placement');


Vue.use( Router );

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'home',
      component: Home
    },

    { path: '/boilerplate',
      name: 'boilerplate',
      component: Boilerplate
    },

    { path: '/demos/modal-growl',
      name: 'modal-growl',
      component: ModalGrowl
    },

    { path: '/demos/table',
      name: 'table',
      component: Table
    },

    { path: '/reports/overview',
      name: 'reports-overview',
      component: ReportsOverview
    },

    {
      path: '/reports/investment-placement',
      name: '/reports/investment-placement',
      component: InvestmentPlacement
    },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
