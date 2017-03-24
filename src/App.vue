<template>
  <div id="app">
    <Dheader></Dheader>
    <transition name="fade">
      <keep-alive exclude="moviesDetail">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello vue'
    }
  },
  components: {
    'Dheader': (resolve) => {
      require(['./header'], resolve)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">

  *{
    margin: 0;
    padding: 0;
    font-family: '微软雅黑';
  }
</style>
