

import Vue from 'vue';
import VueRx from 'vue-rx';
import { Observable } from 'rxjs/Observable';
import router from './_router/routes';
import { store } from './_store/store';
import App from './views/App';

Vue.use(VueRx, {
  Observable: Observable
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});