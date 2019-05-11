<template>
  <div id="food-list" class="w-h-full col">
    <van-nav-bar
      :title="$route.query.title"
      left-text="返回"
      left-arrow
      @click-left="$router.goBack()"
    />
    <div class="flex-1 y-scroll">
      <van-list v-model="loading" 
        :finished="finished" 
        finished-text="没有更多了"
        :immediate-check="false"
        @load="onLoad">
        <van-cell v-for="(item, index) in list" :key="index" >
          <template>
            <div class="row w-full" @click="$router.push('/food/detail')">
              <img :src="require('@images/list/3.jpg')" class="w-140 h-110 radius-8"/>
              <div class="col space-between pl-10 hidden">
                <span class="fs-16 black-dark ellipsis">{{ item.name }}</span>
                <span class="ellipsis fs-12">{{ join(item.arr) }}</span>
                <span>{{ item.author }}</span>
                <span class="fs-13">{{ item.score }}分 - {{ item.cookCount }}人做过</span>
              </div>
            </div>
          </template>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'FoodList',
  components: {
  },
  data () {
    return {
      loading: false,
      finished: false,
      list: [],
      mockData: [{
        name: '可乐鸡翅',
        src: require('@images/list/3.jpg'),
        arr: ['鸡翅', '可乐', '盐', '料酒', '老抽', '生抽', '姜片'],
        author: 'zhanghaibiao',
        score: 8.5,
        cookCount: 66411
      }, {
        name: '可乐鸡翅',
        src: require('@images/list/3.jpg'),
        arr: ['鸡翅', '可乐', '盐', '料酒', '老抽', '生抽'],
        author: 'zhanghaibiao',
        score: 8.5,
        cookCount: 66411
      }, {
        name: '可乐鸡翅',
        src: require('@images/list/3.jpg'),
        arr: ['鸡翅', '可乐', '盐', '料酒', '老抽', '生抽'],
        author: 'zhanghaibiao',
        score: 8.5,
        cookCount: 66411
      }, {
        name: '可乐鸡翅',
        src: require('@images/list/3.jpg'),
        arr: ['鸡翅', '可乐', '盐', '料酒', '老抽', '生抽'],
        author: 'zhanghaibiao',
        score: 8.5,
        cookCount: 66411
      }, {
        name: '可乐鸡翅',
        src: require('@images/list/3.jpg'),
        arr: ['鸡翅', '可乐', '盐', '料酒', '老抽', '生抽'],
        author: 'zhanghaibiao',
        score: 8.5,
        cookCount: 66411
      }, {
        name: '可乐鸡翅',
        src: require('@images/list/3.jpg'),
        arr: ['鸡翅', '可乐', '盐', '料酒', '老抽', '生抽'],
        author: 'zhanghaibiao',
        score: 8.5,
        cookCount: 66411
      }],
    }
  },
  computed: {
    join() {
      return function(arr) {
        return arr.join('、');
      }
    }
  },
  methods: {
    onLoad() {
      console.log('onLoad');
      if (!this.finished) {
        this.list = this.list.concat(this.mockData);
        this.finished = true;
        this.loading = false;
      }
    }
  },
  created() {
    setTimeout(() => {
      this.list = this.mockData;
    }, 1000);
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
</style>
