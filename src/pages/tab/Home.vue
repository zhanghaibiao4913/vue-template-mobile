<template>
  <div id="home-page" class="w-h-full y-scroll col">
    <div class="w-full blue-light-bg">
      <van-search placeholder="搜索菜谱" v-model="searchValue" background="#3195e7" />
    </div>
    <div class="flex-1 y-scroll">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" width="100%" height="200" />
        </van-swipe-item>
      </van-swipe>
      <split-title title="最新菜谱" />
      <ul class="ptb-10 plr-20" style="column-count: 2; column-gap: 20px;">
        <li class="col mb-10 h-full overflow-auto" v-for="(item, index) in list" :key="index" @click="$router.push('/food/detail')">
          <img :src="item.img" class="radius-8 w-full" />
          <span class="fs-13 gray-dark ellipsis">{{ item.name }}</span>
          <span class="fs-12 gray-light">{{ item.score }}分 - {{ item.cookCount }}人做过</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SplitTitle from "@/components/splitTitle";
export default {
  name: 'Home',
  components: {
    SplitTitle
  },
  data() {
    return {
      images: [
        require('@images/swipe/1.jpg'),
        require('@images/swipe/2.jpg'),
        require('@images/swipe/3.jpg'),
        require('@images/swipe/4.jpg'),
      ],
      searchValue: '',
      list: [{
        name: '可乐鸡翅',
        img: require('@images/list/1.jpg'),
        score: 8.2,
        cookCount: 1256
      }, {
        name: '糖醋黄花鱼',
        img: require('@images/list/2.jpg'),
        score: 8.5,
        cookCount: 1589
      }, {
        name: '大盘鸡',
        img: require('@images/list/3.jpg'),
        score: 8.5,
        cookCount: 1589
      }, {
        name: '不焯水不放油的家常红烧肉',
        img: require('@images/list/4.jpg'),
        score: 7.8,
        cookCount: 1049
      }, {
        name: '红烧茄子',
        img: require('@images/list/5.jpg'),
        score: 7.8,
        cookCount: 1049
      }, {
        name: '红烧福寿鱼',
        img: require('@images/list/6.jpg'),
        score: 7.8,
        cookCount: 1049
      }]
    };
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
