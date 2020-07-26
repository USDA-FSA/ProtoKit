
import { service } from '@/_services/users.service';


const state = () => ({
  all: []
});

const getters = {

  getUsers: state => state.all

};

const actions = {

  async getUsersApi({ commit }){
    console.log('getUsersApi')

    return new Promise( (resolve) => {
      service.getAllUsers( result => {
        commit('SET_ALL_USERS', result.data);
        resolve();
      });
    });

  },

  addNewUser({ commit }, payload){
    commit('ADD_NEW_USER', payload);
  }
  
};

const mutations = {

  SET_ALL_USERS( state, payload ){
    state.all = payload;
  },

  ADD_NEW_USER( state, payload ){
    state.all.push( payload );
  },

};

export const users = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};