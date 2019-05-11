import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import types from './types';
import user from './modules/user';
// 导出 store 对象
export default new Vuex.Store({
  modules: {
    user,
  },
  state: {
    cachePages: [],
    pageLoading: false
  },
  mutations: {
    [types.PUT_CACHE_PAGE](state, page) {
      if (!state.cachePages.includes(page)) {
        state.cachePages.push(page);
      }
    },
    [types.REMOVE_CACHE_PAGE](state, page) {
      if (state.cachePages.indexOf(page) > -1) {
        state.cachePages.splice(state.cachePages.indexOf(page), 1);
      }
    },
    [types.SHOW_PAGE_LOADING](state, isLoading = true) {
      state.pageLoading = isLoading;
    }
  },
  actions: {
    [types.LOGIN_OUT]({state, commit }) {
      commit(types.REMOVE_TOKEN);
      commit(types.REMOVE_USER);
    }
  }
});
