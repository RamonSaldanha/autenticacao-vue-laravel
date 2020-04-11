import auth from '../../api/auth';

const state = {
  user: {},
  token: '',
  isAuth: false
};

const getters = {
  user: state => state.user,
  token: state => state.user.access_token,
  isAuth: state => state.isAuth
};

const actions = {

  login({commit}, data) {
    return new Promise((resolve, reject) => {
      //api/auth.js login()
      auth.loginUser( data ).then(response => {
        commit('setUser', response.data);
        commit('setAuth', true);
        resolve(response);
      }).catch(error => {
        reject(error);
      })

    });
  },

  logout({commit}, token) {
    return new Promise((resolve, reject) => {
      auth.logoutUser( token ).then(response => {
        commit('setAuth', false);
        resolve(response);
      }).catch(error => {
        reject(error);
      })
    });
  },

  getUsetByToken( {commit}, token ) {
    return new Promise((resolve, reject) => {
      auth.getUser( token ).then(response => {
        commit('setUser', response.data );
        commit('setAuth', true);
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
  setUser(state, user) {
    state.user = user;
  },
  setAuth (state, mode) {
    state.isAuth = mode;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};