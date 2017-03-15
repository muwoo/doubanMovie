<template>
  <div class="hello">
    <MoviesTag :data="movingList"></MoviesTag>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {

      }
    },
    mounted () {
      this.$store.dispatch('getMoving')
    },
    methods: {

    },
    components: {
      'MoviesTag': (resolve) => {
        require(['./common/moviesTag.vue'], resolve)
      }
    },
    computed: {
      title () {
        return this.$store.getters.title
      },
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
