
const Home = () => import('../views/Home');
const Boilerplate = () => import('../views/Boilerplate');
const ModalGrowl = () => import('../views/demos/Modal-Growl');
const Table = () => import('../views/demos/Table');
const ReportsOverview = () => import('../views/reports/Overview');
const InvestmentPlacement = () => import('../views/reports/Investment-Placement');
const SteppedDemo = () => import('../views/demos/Stepped-Demo');
const Timeline = () => import('../views/demos/Timeline');

const programRoute = 'programs/UXP'

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
    name: '/reports/investment-placement',
    component: InvestmentPlacement
  }
];
