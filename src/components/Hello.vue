<template>
  <div class="hello">
    <MoviesTag :data="data"></MoviesTag>

  </div>
</template>

<script>
  import {Utils} from '../common/util'
  // import MoviesTag from './common/moviesTag.vue'
  // import MoviesDetail from './common/moviesDetail.vue'
  let utils = new Utils()
  export default {
    name: 'hello',
    data () {
      return {
        data: {}
      }
    },
    mounted () {
      this.$store.dispatch('getMoving')
      this. getMovie()
    },
    methods: {
      getMovie () {
        utils.get('/movie/in_theaters', {}).then(res => {
          this.$store.commit('MOVING_TITLE', {title: 'monkey'})
          this.data = res
          console.log(res)
        })
      }
    },
    components: {
      'MoviesTag': (resolve) => {
        require(['./common/moviesTag.vue'], resolve)
      }
    },
    computed: {
      title () {
        return this.$store.getters.title
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
