<template>
  <div id="app">
    <Dheader></Dheader>
    <router-view></router-view>
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
  }
</style>
