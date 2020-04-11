import auth from '../../api/auth';

const state = {
  user: {},
  token: ''
};

const getters = {
  user: state => state.user,
  token: state => state.user.access_token
};

const actions = {
  login({commit}, data) {
    return new Promise((resolve, reject) => {
      //api/auth.js login()
      auth.loginUser( data ).then(response => {
        commit('setAuth', response.data);
        resolve(response);
      }).catch(error => {
        reject(error);
      })

    });
  },

  getUsetByToken( {commit}, token ) {
    return new Promise((resolve, reject) => {
      auth.getUser( token ).then(response => {
        commit('setAuth', response.data )
        resolve(response);
      }).catch(error => {
        reject(error);
      })
      
    });
  },

  signup ({commit}, data) {
    return new Promise((resolve, reject) => {

      auth.registerUser( data ).then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      })

    })
  }
};

const mutations = {
  setAuth(state, user) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};