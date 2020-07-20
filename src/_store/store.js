

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

import { UXPstore } from '../programs/UXP/store';

export default new Vuex.Store({
  modules: {
    UXPstore
  }
});

/*
export const store = new Vuex.Store({
  modules: {
    UXPstore
  }
});
*/
