import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
Vue.config.productionTip = false;
import libs from './libs';
Vue.use(libs, { router, store });

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
