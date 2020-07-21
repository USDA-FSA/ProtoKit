
import Home from '../views/Home.vue';
import Boilerplate from '../views/Boilerplate.vue';
import ModalGrowl from '../views/demos/ModalGrowl.vue';
import Table from '../views/demos/Table.vue';
import ReportsOverview from '../views/reports/Overview.vue';
import InvestmentPlacement from '../views/reports/InvestmentPlacement.vue';
import SteppedDemo from '../views/demos/SteppedDemo.vue';
import Timeline from '../views/demos/Timeline.vue';

const programRoute = '/programs/UXP'

export const UXPRoutes = [
  { 
    path: programRoute + '/',
    name: 'home',
    component: Home
  },
  { 
    path: programRoute + '/boilerplate',
    name: 'boilerplate',
    component: Boilerplate
  },
  { 
    path: programRoute + '/demos/modal-growl',
    name: 'modal-growl',
    component: ModalGrowl
  },
  { 
    path: programRoute + '/demos/table',
    name: 'table',
    component: Table
  },
  {
    path: programRoute + '/demos/stepped',
    name: 'stepped',
    component: SteppedDemo
  },
  {
    path: programRoute + '/demos/timeline',
    name: 'timeline',
    component: Timeline
  },
  { 
    path: programRoute + '/reports/overview',
    name: 'reports-overview',
    component: ReportsOverview
  },

  {
    path: programRoute + '/reports/investment-placement',
    name: 'reports-investment-placement',
    component: InvestmentPlacement
  }
];
