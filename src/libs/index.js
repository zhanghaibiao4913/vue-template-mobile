import 'vant/lib/index.css';
import vant from './vant';
// 图标
import "font-awesome/css/font-awesome.css";
import axios from './http';
require('./mock');
import config from '../config.js';
// 进度条
import VueInsProgressBar from 'vue-ins-progress-bar';

let Plugins = {};
Plugins.install = (Vue, { router, store }) => {
  Vue.prototype.$config = config;
  Vue.use(axios, { router, store });
  Vue.use(vant);
  Vue.use(VueInsProgressBar, {
    position: 'fixed',
    show: true,
    height: '3px'
  });
};

export default Plugins;