import Axios from 'axios';
import CONFIG from '@/config.js';

let AxiosPlugin = {};
AxiosPlugin.install = (Vue, { router, store }) => {
  const axios = Axios.create({
    baseURL: CONFIG.baseURL,
    timeout: 8 * 1000
  });
  
  axios.interceptors.request.use(config => {
    if (store.state.user.token) {
      config.headers.authorization = `token ${store.state.token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });
  
  axios.interceptors.response.use(res => {
    if (res.headers.authorization) {
      let authorization = res.headers.authorization;
      store.commit("SET_TOKEN", authorization);
    }
    return response;
  }, error => {
    if (!error.response) {
      console.log('请求超时');
    }
    if (error.response.status === 401) {
    }
    if (error.response.status === 403) {
    }
    if (error.response.status === 404) {
    }
    if (error.response.status === 500) {
    }
    return Promise.reject(error);
  });

  Vue.prototype.$http = axios;
  AxiosPlugin.$http = axios;
};

export default AxiosPlugin;
