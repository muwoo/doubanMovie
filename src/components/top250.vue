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
        top250: [],
        timer: null,
        isLoad: false,
        page: 1,
        totalPage: 0,
        start: 1
      }
    },
    mounted () {
      this.$store.commit('PAGE_START', {start: 0})
      this.$store.dispatch('loadingtop250')
      window.onscroll = () => {
        if (!this.isLoad) {
          if (util.getScrollTop() + util.getClientHeight() + 400 > util.getScrollHeight()) {
            let page = this.page + 1
            if (this.page <= this.totalPage) {
              this.isLoad = true
              this.page = page
              this.start = (this.page - 1) * 10
              this.$store.commit('PAGE_START', {start: this.start})
              this.$store.dispatch('loadingtop250')
            }
          }
        }
      }
    },
    components: {
      'searchTag': (resolve) => {
        require(['./common/searchTag.vue'], resolve)
      }
    },
    computed: {
      ranking250 () {
        this.isLoad = false
        let ranklist = this.$store.getters.ranking250
        this.totalPage = ranklist.total
        return ranklist
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
