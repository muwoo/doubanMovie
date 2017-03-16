<template>
  <div class="hello">
    <MoviesTag :data="movingList"></MoviesTag>

  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted () {
      /**
       * 获取正在上映列表
       */
      this.$store.dispatch('getMoving')
    },
    components: {
      'MoviesTag': (resolve) => {
        require(['./common/moviesTag.vue'], resolve)
      }
    },
    computed: {
      /**
       * function 电影列表函数
       * @returns {computed.movingList|state.movingList|{subjects}|getters.movingList|*}
       */
      movingList () {
        return this.$store.getters.movingList
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less">
  .hello {
    p {
      color: red;
    }
  }
</style>
