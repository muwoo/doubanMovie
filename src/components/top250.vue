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
  import {Utils} from '../common/util'
  let util = new Utils()
  export default{
    props: {
      data: Object
    },
    data () {
      return {
        timer: null,
        isLoad: false,
        page: 1,
        totalPage: 0,
        start: 1
      }
    },
    mounted () {
      this.$store.commit('PAGE_START', {start: 8})
      this.$store.dispatch('loadingtop250')
      window.onscroll = function () {
        console.log('111')
        if (!this.isLoad) {
          this.isLoad = true
          if (util.getScrollTop() + util.getClientHeight() + 200 >= util.getScrollHeight()) {
            this.page = this.page + 1
            if (this.page <= this.totalPage) {
              console.log('222')
              this.start = this.page * 10 + 1
              this.$store.commit('PAGE_START', {start: this.start})
              this.$store.dispatch('loadingtop250')
            }
          }
        }
      }.bind(this)
    },
    components: {
      'searchTag': (resolve) => {
        require(['./common/searchTag.vue'], resolve)
      }
    },
    computed: {
      ranking250 () {
        this.isLoad = false
        this.totalPage = this.$store.getters.ranking250.total
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
