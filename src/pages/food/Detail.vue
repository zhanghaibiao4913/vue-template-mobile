<template>
  <div id="food-detail" class="w-h-full y-scroll mt-46">
    <van-nav-bar :fixed="true"
      title="菜谱"
      left-text="返回"
      left-arrow
      @click-left="$router.goBack()"
    />
    <img :src="require('@images/list/3.jpg')" width="100%" height="200" />
    <div class="col m-20 van-hairline--bottom center-x">
      <span class="fs-20">可乐鸡翅</span>
      <span class="fs-14 ptb-20">8.2 综合评分-11646人做过</span>
    </div>
    <div class="row plr-20 relative">
      <img :src="require('@images/user/avatar.jpg')" class="w-h-60 radius" />
      <div class="col ml-10">
        <span class="fs-13">作者</span>
        <span class="fs-14">zhanghaibiao</span>
      </div>
      <van-button plain type="danger" class="h-30 l-h-28 absolute right-20">关注TA</van-button>
    </div>
    <div class="col m-20">
      <div class="pb-20">用料</div>
      <div class="row van-hairline--bottom ptb-10" v-for="(item, index) in ingredients" :key="index">
        <span class="flex-3">{{ item.name }}</span>
        <span class="flex-1">{{ item.count }}</span>
      </div>
    </div>
    <div class="plr-20">
      <div v-for="(item, index) in steps" :key="index" class="col van-hairline--bottom">
        <h2 class="ptb-10">步骤{{ index }}</h2>
        <img :src="item.src" width="100%" height="200" class="radius-8"/>
        <span class="ptb-10">{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'FoodDetail',
  components: {
  },
  data () {
    return {
      ingredients: [{
        name: '鸡翅',
        count: '8个'
      }, {
        name: '可乐',
        count: '易拉罐一罐'
      }, {
        name: '盐',
        count: '适量'
      }, {
        name: '料酒',
        count: '适量'
      }, {
        name: '老抽',
        count: '7ml'
      }, {
        name: '生抽',
        count: '10ml'
      }, {
        name: '姜片',
        count: '5片'
      }],
      steps: [{
        text: '在生鸡翅上划刀，或者用牙签给每个鸡翅正反面共戳6个小洞，这样可以更加入味。用一勺老抽5ml，两勺料酒10ml腌至少两小时 【时间紧可省略腌制，但要划刀和戳洞，否则不易入味】',
        src: require('@images/detail/1.jpg')
      }, {
        text: '锅中放冷水和葱姜片，鸡翅与冷水一同下锅煮开，不用煮透，看到浮沫比较多时关火捞出即可，用温热的水一个个冲洗掉浮沫，沥干',
        src: require('@images/detail/2.jpg')
      }, {
        text: '用厨房用纸擦干，有杂毛可以这时候拔干净',
        src: require('@images/detail/3.jpg')
      }, {
        text: '最好用不粘锅】把锅用姜片涂一遍可以防止鸡翅粘锅',
        src: require('@images/detail/4.jpg')
      }, {
        text: '（不用放油，鸡翅自己会出油）用小火将鸡翅煎至金黄，晃动锅以免粘锅',
        src: require('@images/detail/5.jpg')
      }, {
        text: '一听可乐、一勺料酒、一勺老抽，两勺生抽，加半支桂皮一个八角会更有风味。不用加水。炖至汤汁还剩一碗水的量时，再尝尝咸淡，如需加盐再加少量盐，这样不容易出差错',
        src: require('@images/detail/6.jpg')
      }, {
        text: '炖至汤汁收浓，浓度看图，基本所有汁都裹在鸡翅上了，只剩约三勺汤汁了，出锅',
        src: require('@images/detail/7.jpg')
      }]
    }
  },
  methods: {
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
</style>
