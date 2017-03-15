<template>
  <div class="grid-950 clearfix">
      <article class="container">
        <div class="tit"></div>
        <div class="two-list">
          <ul class="clearfix"  v-loading="loadingMoving" > 
            <li class="item" v-for="item in upcomBody.subjects">
              <a class="thumb" v-bind:href="item.alt">
                  <img v-bind:src="item.images.small" class="">
              </a>
              <div class="intro">
                  <h3>
                      <a v-bind:href="item.alt" class="">{{item.title}}</a>
                      <span class="icon"></span>
                  </h3>
                  <ul>
                          <li class="dt">03月17日</li>
                          <li class="dt"><em v-for="it in item.genres">{{it}}/</em></li>
                          <li class="dt">美国</li>
                          <li class="dt last"><span class="">{{item.collect_count}}人想看</span></li>
                          <a href="https://movie.douban.com/trailer/211279/#content" class="trailer_icon">预告片</a>
                          <li>
                              <a href="https://movie.douban.com/subject/25900945/cinema/hangzhou/" class="ticket_btn">
                                  6家影院有影讯 »
                              </a>
                          </li>
                  </ul>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <aside class="right-side">
尴尬乌龙丨第89届奥斯卡获奖影片
      </aside>
    <!-- <p>{{upcomBody}}</p> -->
  </div>
</template>

<script>
  export default {
    name: 'upcoming',
    data () {
      return {}
    },
    mounted () {
      this.$store.dispatch('getUpcoming')
    },
    methods: {

    },
    computed: {
      upcomBody () { // upcomBody属性变了 触发这个方法
        return this.$store.getters.upcomBody
      },
      loadingMoving () {
        console.log(this.$store.getters.loadingMoving)
        return this.$store.getters.loadingMoving
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style rel="stylesheet/less" lang="less">
@import '../../style/base.less';
.container{
  float: left;
  width: 590px;
}
.right-side{
  float: right;
  width: 310px;
}
.two-list{
  
}
.item{
  position: relative;
  float: left;
  padding: 20px 0 20px 120px;
  width: 173px;
  height: 140px;
  border-bottom: 1px dashed #ccc;
}
.item .thumb{
  position: absolute;
  left: 0;
  width: 100px;
  height: 140px;
  img{
    width: 100%;
    height: 140px;
  }
}
</style>
