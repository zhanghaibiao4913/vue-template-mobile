<template>
  <div class="split-title-wrapper">
    <div class="split-title">
      <b></b>
      <span :style="{color: color}">{{ title }}</span>
      <b></b>
    </div>
    <div v-if="label" class="split-label">{{ label }}</div>
  </div>
</template>

<script>

export default {
  name: 'SplitTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    };
  },
  computed: {
    classes() {
      return [
      ]
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.split-title-wrapper{
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  .split-title{
    width: 100%;
    text-align: center;
    b{
      background: #ddd;
      margin-top: 4px;
      display: inline-block;
      width: 70px;
      height: 1px;
      overflow: hidden;
      vertical-align: middle;
    }
    span{
      display: inline-block;
      vertical-align: middle;
      padding: 0 10px;
      color: rgb(49, 149, 231);
      font-size: 20px;
      font-weight: 700;
    }
  }
  .split-label{
    color: #999999;
    text-align: center;
  }
}
</style>
