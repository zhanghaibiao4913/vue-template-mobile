<template>
  <div id="user-page" class="w-h-full y-scroll col" style="background-color: #eee;">
    <div class="w-full col center-xy p-20">
      <img :src="require('@images/user/avatar.jpg')" class="w-h-60 radius-8" />
      <span class="pt-10">一只特立独行的猪</span>
    </div>
    <div class="flex-1">
      <van-cell title="消息" is-link icon="comment-o" />
      <van-cell title="我的收藏" is-link icon="like-o" />
      <van-cell title="设置" is-link icon="setting-o" />
      <van-cell title="浏览记录" is-link icon="eye-o" />
    </div>
    <div>
      <van-button type="danger" class="w-full" @click="loginOut">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'User',
  components: {
  },
  data () {
    return {
    };
  },
  methods: {
    ...mapActions([
      'LOGIN_OUT'
    ]),
    loginOut() {
      this.$dialog.confirm({
        title: '确定退出登录？',
      }).then(() => {
        // on confirm
        this.LOGIN_OUT();
        setTimeout(() => {
          this.$router.push('/login');
        }, 500);
      }).catch(() => {
        // on cancel
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
