import types from '../types.js';

export default {
  state: {
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    rememberAccount: localStorage.getItem('rememberAccount') || false
  },
  getters: {}, 
  mutations: {
    [types.SET_TOKEN](state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    [types.REMOVE_TOKEN](state) {
      state.token = null;
      localStorage.removeItem('token');
    },
    [types.SET_USER](state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    [types.REMOVE_USER](state) {
      if (state.rememberAccount) {
        let username = JSON.parse(localStorage.getItem('user')).username;
        localStorage.removeItem('user');
        state.user = {username: username};
        localStorage.setItem('user', JSON.stringify({username: username}));
      } else {
        state.user = null;
        localStorage.removeItem('user');
      }
    },
    [types.SET_REMEMBER_ACCOUNT](state, flag) {
      state.rememberAccount = flag;
      localStorage.setItem('rememberAccount', flag);
    }
  },
  actions: {}
}