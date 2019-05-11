<template>
  <div id="app" class="w-h-full">
    <vue-ins-progress-bar></vue-ins-progress-bar>
    <div class="page-loading" v-if="pageLoading">
      <van-loading type="spinner" color="#ffffff" />
    </div>
    <transition :name="transitionName">
      <keep-alive :include="cachePages" :max="3">
        <router-view v-if="isRouterAlive"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-right",
      isRouterAlive: true
    };
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  computed: {
    ...mapState({
      cachePages: state => state.cachePages,
      pageLoading: state => state.pageLoading
    })
  },
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      });
    }
  },
  created() {
    this.$insProgress.start();
    this.$router.beforeEach((to, from, next) => {
      this.$insProgress.start();
      next();
    });

    this.$router.afterEach((to, from) => {
      this.$insProgress.finish();
    });
  },
  mounted() {
    this.$insProgress.finish();
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/common/index.scss';
#app{
  // background-color: #c8c9cc;
}
[class*=van-hairline]::after{
  border-color: #969799;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  -webkit-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
}
.slide-left-enter,
.slide-right-leave-to {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0);
}
.slide-left-leave-to,
.slide-right-enter {
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}

.page-loading{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background-color: rgba(17, 17, 17, 0.7);
  border-radius: 5px;
  z-index: 2019;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
