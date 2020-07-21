
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

import { UXPStore } from '../programs/UXP/store/store'

export default new Vuex.Store({
  modules: {
    UXPStore
  }
});

/*
export const store = new Vuex.Store({
  modules: {
    UXPstore
  }
});
*/
