<template>
  <div class="grid-950 clearfix">
      <article class="container">
        <div class="tit">
          <h1>杭州-影讯</h1>
          <div id="" class="locat">
            <a class="change-loc" href="javascript:void(0);" v-on:click="showCity= true">[切换城市]</a>
            <div class="cities-list" v-bind:class="{'fn-hide':!showCity,'': showCity}">
                <div class="cities-list-bd">
                    <div class="cities-list-item" v-on:click="changeCity($event)">
                          <span><a class="city-item" href="javascript:;" id="108288" uid="beijing">北京</a></span>
                          <span><a class="city-item" href="javascript:;" id="108296" uid="shanghai">上海</a></span>
                          <span><a class="city-item" href="javascript:;" id="118281" uid="guangzhou">广州</a></span>
                          <span><a class="city-item" href="javascript:;" id="118282" uid="shenzhen">深圳</a></span>
                          <span><a class="city-item" href="javascript:;" id="118254" uid="wuhan">武汉</a></span>
                          <span><a class="city-item" href="javascript:;" id="118172" uid="hangzhou">杭州</a></span>
                    </div>
                    <div class="arrow"><span></span></div>
                </div>
            </div>
          </div>
          <div class="hd">
              <h2>影院上映</h2>
              <ul class="tab-hd clearfix">
                  <li class="on">即将上映</li>
              </ul>
          </div>
        </div>
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
      return {
        showCity: false
      }
    },
    mounted () {
      this.$store.dispatch('getUpcoming')
    },
    methods: {
      changeCity (event) {
        let text = event.target.innerText
        this.$store.commit('MOVIE_CITY', {city: text})
        this.showCity = false
        this.$store.dispatch('getUpcoming')
      }
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
  min-height: 500px;
}
.tit{
    margin-top: 20px;
  h1{
    display: inline-block;
    width: 90px;
    font-size: 20px;
    color: #000;
  }
  .locat{
    position: relative;
    display: inline-block;

  }
}
.locat{
  .cities-list{
    position: absolute;
    left: 0;
    top: 18px;
    padding: 10px;
    background: #fff;
    z-index: 999;
    border: 1px solid #ccc;
    span{
      display: block;
    }
  }
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
.tab-hd{
  vertical-align: bottom;
  li{
    margin: 0 5px;
    float: left;
  }
  .on{
    background-color: #69c;
    color: #fff;
    padding: 0 10px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
}
.hd{
  padding: 10px 0;
  border-bottom: 1px dashed #ccc;
  h2,.tab-hd{
    display: inline-block;
  }
}
</style>
