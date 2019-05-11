<template>
  <div id="category-page" class="w-h-full y-scroll pb-20">
    <div class="col plr-20" v-for="(category, index) in mockData" :key="index">
      <div class="title">{{ category.title }}</div>
      <ul class="row wrap">
        <li class="item" v-for="(item, i) in category.list" :key="i" @click="$router.push({path: '/food/list', query: {title: item.name}})">
          <img :src="item.src" width="100%" height="100%"></img>
          <div class="name">{{ item.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  components: {
  },
  data () {
    return {
      mockData: [{
        title: '热门分类',
        list: [{
          name: '家常菜',
          src: require('@images/category/jcc.jpg')
        }, {
          name: '下饭菜',
          src: require('@images/category/xfc.jpg')
        }, {
          name: '烘焙菜',
          src: require('@images/category/hbc.jpg')
        }, {
          name: '肉类',
          src: require('@images/category/rl.jpg')
        }, {
          name: '早餐',
          src: require('@images/category/zc.jpg')
        }, {
          name: '蔬菜',
          src: require('@images/category/sc.jpg')
        }, {
          name: '汤粥主食',
          src: require('@images/category/tzzs.jpg')
        }]
      }, {
        title: '菜式',
        list: [{
          name: '快手菜',
          src: require('@images/category/ksc.jpg')
        }, {
          name: '甜品饮品',
          src: require('@images/category/tpyp.jpg')
        }, {
          name: '小吃',
          src: require('@images/category/xc.jpg')
        }, {
          name: '零食',
          src: require('@images/category/ls.jpg')
        }, {
          name: '懒人食谱',
          src: require('@images/category/lrsp.jpg')
        }, {
          name: '下酒菜',
          src: require('@images/category/xjc.jpg')
        }, {
          name: '凉菜',
          src: require('@images/category/lc.jpg')
        }]
      }, {
        title: '场景',
        list: [{
          name: '一人食',
          src: require('@images/category/yrs.jpg')
        }, {
          name: '宴客',
          src: require('@images/category/yk.jpg')
        }, {
          name: '下午茶',
          src: require('@images/category/xwc.jpg')
        }, {
          name: '便当',
          src: require('@images/category/bd.jpg')
        }, {
          name: '烹调方法',
          src: require('@images/category/ptff.jpg')
        }, {
          name: '宿舍',
          src: require('@images/category/ss.jpg')
        }, {
          name: '宵夜',
          src: require('@images/category/xy.jpg')
        }]
      }, {
        title: '趣味分类',
        list: [{
          name: '自制',
          src: require('@images/category/zz.jpg')
        }, {
          name: '创意菜',
          src: require('@images/category/cyc.jpg')
        }, {
          name: '外貌协会',
          src: require('@images/category/wmxh.jpg')
        }, {
          name: '口味',
          src: require('@images/category/kw.jpg')
        }, {
          name: '小清新',
          src: require('@images/category/xqx.jpg')
        }, {
          name: '野餐',
          src: require('@images/category/yc.jpg')
        }]
      }]
    };
  },
  methods: {
  },
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.title{
  padding-bottom: 10px;
  padding-top: 20px;
}
.item{
  width: 70px;
  height: 70px;
  position: relative;
  margin-bottom: 10px;
  &:not(:last-child){
    margin-right: 10px;
  }
  img{
    border-radius: 8px;
  }
  .name{
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    color: #fff;
    font-size: 14px;
    text-align: center;
  }
}
</style>
