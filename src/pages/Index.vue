<template>
  <div class="w-h-full pb-50">
    <router-view></router-view>
    <van-tabbar v-model="tabIndex">
      <van-tabbar-item icon="home-o" :to="{path: '/index/home'}">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" dot :to="{path: '/index/category'}">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" :to="{path: '/index/user'}">用户中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Index',
  components: {
    
  },
  data () {
    return {
    };
  },
  computed: {
    tabIndex: {
      get() {
        let paths = ['/index/home', '/index/category', '/index/user'];
        let index = paths.findIndex((value, index, arr) => {
          return value === this.$route.path;
        });
        return index;
      },
      set(val) {
        // console.log(val);
      }
    }
  },
  methods: {
  },
  created() {
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
</style>
