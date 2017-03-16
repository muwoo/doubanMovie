<template>
  <div id="wrapper" v-loading="loadingMoving">
    <h2>豆瓣新片榜 · · · · · · </h2>
    <div class="indent">
      <div class="">
        <p class="ul first"></p>
        <searchTag v-for="(subject,index) in ranking250.subjects" :subject="subject"></searchTag>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      data: Object
    },
    data () {
      return {}
    },
    mounted () {
      this.$store.dispatch('loadingtop250')
    },
    components: {
      'searchTag': (resolve) => {
        require(['./common/searchTag.vue'], resolve)
      }
    },
    computed: {
      ranking250 () {
        return this.$store.getters.ranking250
      },
      loadingMoving () {
        return this.$store.getters.loadingMoving
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  #wrapper {
    width: 950px;
    min-height: 500px;
    margin: 30px auto;
  }

</style>
