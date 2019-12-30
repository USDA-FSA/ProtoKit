
import { service } from '../_services/users.service';

const utils = {

  removeExt: function( ext, str ){
    return str.split(ext)[0];
  },

};

const state = {
  all: []
};

const getters = {

  getUsers(state){
    return state.all;
  },
  
  /*
    getters can augment, but NOT mutation (change) store data
  */
  smartUsers: state => {
    // cycle thru array and return new array with augmentation
    let sUsers = state.all.map( user => {
      return {
        name: 'smart ' + user.name,
        email: user.email
      }
    });
    return sUsers;
  }

};

const actions = {

  getUsersApi({ commit }){
    // calls a service and passes in the callback method "commit('SET_ALL_USERS', users)"
    service.getAllUsers( users => {
      // calls mutation with users data
      commit('SET_ALL_USERS', users);
    });
  },

  killExtention({ commit }){
    commit('KILL_EXTENTION');
  },

  addNewUser({ commit }, user){
    commit('ADD_NEW_USER', user);
  }
  
};

const mutations = {

  SET_ALL_USERS( state, users ){
    // all is a generic array... can be any word, eg "data" or "arr"
    state.all = users;
  },

  KILL_EXTENTION( state ){
    let kx = state.all.forEach( user => {
      user.email = utils.removeExt('.com', user.email) ;
    });
    return kx;
  },

  ADD_NEW_USER( state, user ){
    state.all.push( user );
  },

};

export const users = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};