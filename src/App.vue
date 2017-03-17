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
  .fade-enter-active {
    transition: opacity 0.2s
  }
  .fade-leave-active {
    transition: opacity 0.2s
  }
  .fade-enter-active {
    opacity: 0
  }
  .fade-leave-active {
    opacity: 0
  }
  *{
    margin: 0;
    padding: 0;
    font-family: '微软雅黑';
  }
</style>
