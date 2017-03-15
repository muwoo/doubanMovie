<template>
  <div class="hello">

    <p>{{title}}</p>

  </div>
</template>

<script>
  import {Utils} from '../common/util'
  let utils = new Utils()
  export default {
    name: 'hello',
    data () {
      return {}
    },
    mounted () {
      this.getMovie()
    },
    methods: {
      getMovie () {
        utils.get('/movie/in_theaters', {}).then(res => {
          this.$store.commit('MOVING_TITLE', {title: 'monkey'})
          console.log(res)
        })
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
.hello{
  p{
    color: red;
  }
}
</style>
