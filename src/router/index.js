import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
Vue.use(Router);

Router.prototype.goBack = function() {
  this.isBack = true;
  window.history.go(-1);
};

const routes = [{
  path: '/login',
  name: 'Login',
  title: '登录',
  component: resolve => require(['@/pages/Login.vue'], resolve)
}, {
  path: '/register',
  name: 'Register',
  title: '注册',
  component: resolve => require(['@/pages/Register.vue'], resolve)
}, {
  path: '/',
  redirect: '/index'
}, {
  path: '/index',
  name: 'Index',
  redirect: '/index/home',
  title: '主界面',
  meta: {
    keepAlive: true
  },
  component: resolve => require(['@/pages/index.vue'], resolve),
  children: [{
    path: '/index/home',
    name: 'Home',
    title: '首页',
    component: resolve => require(['@/pages/tab/Home.vue'], resolve),
    meta: {
      needCachePages: ['FoodDetail']
    }
  }, {
    path: '/index/category',
    name: 'Category',
    title: '分类',
    component: resolve => require(['@/pages/tab/Category.vue'], resolve)
  }, {
    path: '/index/user',
    name: 'User',
    title: '用户中心',
    component: resolve => require(['@/pages/tab/User.vue'], resolve)
  }]
}, {
  path: '/food/list',
  name: 'FoodList',
  title: '菜谱列表',
  component: resolve => require(['@/pages/food/List.vue'], resolve),
  meta: {
    needCachePages: ['FoodDetail']
  }
}, {
  path: '/food/detail',
  name: 'FoodDetail',
  title: '菜谱详情',
  component: resolve => require(['@/pages/food/Detail.vue'], resolve)
}];


const router = new Router({
  routes: routes
});


function isKeepAlive(route) {
  if (route.meta && route.meta.keepAlive) {
    store.commit("PUT_CACHE_PAGE", route.name);
  }
  if (route.children) {
    route.children.forEach(child => {
      isKeepAlive(child);
    });
  }
}

routes.forEach(item => {
  isKeepAlive(item);
});

router.beforeEach((to, from, next) => {
  // let paths = ['/login', '/register'];
  // if (paths.includes(to.path) && store.state.user.token) {
  //   console.log('已登录');
  //   return next({ path: '/index' });
  // }

  // if (!paths.includes(to.path) && !store.state.user.token) {
  //   console.log('没有token');
  //   return next({ path: '/login' });
  // }

  if (from.meta.needCachePages && from.meta.needCachePages.includes(to.name)) {
    store.commit("PUT_CACHE_PAGE", from.name);
  } else if (from.meta.needCachePages) {
    store.commit("REMOVE_CACHE_PAGE", from.name);
  }
  next();
});


export default router;
