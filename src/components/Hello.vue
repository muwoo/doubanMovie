<template>
  <div class="hello">

    <p>{{title}}</p>

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {}
    },
    mounted () {
      this.$store.dispatch('getMoving')
    },
    methods: {

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
