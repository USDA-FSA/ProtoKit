

import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import Boilerplate from '../views/Boilerplate';
import ModalGrowl from '../views/demos/Modal-Growl';
import Table from '../views/demos/Table';
import ReportsOverview from '../views/reports/Overview';
import InvestmentPlacement from '../views/reports/Investment-Placement';


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
