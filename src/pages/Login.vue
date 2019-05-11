<template>
  <div id="page-login" class="w-h-full blue-dark-bg relative">
    <div class="w-full pos-center plr-20">
      <van-field
        v-model="username"
        label="账号"
        placeholder="请输入用户名"
        :error-message="errorUsername"
      />
      <van-field
        v-model="password"
        label="密码"
        placeholder="请输入密码"
        :error-message="errorPassword"
      />
      <van-checkbox v-model="checked" checked-color="#07c160" class="ptb-10 row">记住账号</van-checkbox>
      <van-button type="primary" class="w-full mt-10" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      username: '',
      password: '',
      checked: false,
      errorUsername: '',
      errorPassword: ''
    }
  },
  computed: {
    ...mapState({
      'rememberAccount': state => state.user.rememberAccount,
      'user': state => state.user.user
    }),
  },
  methods: {
    ...mapMutations([
      'SET_REMEMBER_ACCOUNT',
      'SET_USER'
    ]),
    login() {
      if (!this.username) {
        this.errorUsername = '账号不能为空';
        return;
      }
      if (!this.password) {
        this.errorPassword = '密码不能为空';
        return;
      }
      this.SET_REMEMBER_ACCOUNT(this.checked);
      this.SET_USER({username: this.username});
      this.$router.push('/index');
    }
  },
  created() {
    this.username = this.user && this.user.username;
    this.checked = this.rememberAccount;
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
</style>
