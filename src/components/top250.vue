<template>
  313123
  <div id="wrapper">
    <div id="content">
      <div class="grid-16-8 clearfix" v-loading="loadingMoving">
        <div class="article">
          <h2>豆瓣新片榜   · · · · · · </h2>
          <div class="indent">
            <div class="">
              <p class="ul first"></p>
              <table width="100%" class="" v-for="(subject,index) in ranking250.subjects">
                <tbody><tr class="itemlist">
                  <td width="100" valign="top">
                    <a class="nbg" href="https://movie.douban.com/subject/26717795/" title="健忘村">
                      <img v-bind:src="subject.images.small" alt="" v-bind:class="subject.title">
                    </a>
                  </td>
                  <td valign="top">
                    <div class="pl2">
                      <a href="https://movie.douban.com/subject/26717795/" class="">
                        {{subject.title}}
                        / <span style="font-size:12px;">{{subject.original_title}}</span>
                      </a>
                      <p class="pl">2017-01-28(中国大陆) / 舒淇 / 王千源 / 张孝全 / 曾志伟 / 杨祐宁 / 张少怀 / 许杰辉 / 林美秀 / 顾宝明 / 陈竹昇 / 柯宇纶 / 黄健玮 / 中国大陆 / 台湾 / 陈玉勋 / 116分钟 / 剧情 / 喜剧 / 奇幻 / 古装 / 陈玉勋 Yu-Hsun Chen / 张耀升 Yao-sheng Chang...</p>
                      <div class="star clearfix">
                        <span class="allstar35"></span>
                        <span class="rating_nums">6.8</span>
                        <span class="pl">({{subject.collect_count}}人评价)</span>
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
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
      return {
      }
    },
    mounted () {
      this.$store.dispatch('loadingtop250')
    },
    computed: {
      ranking250 () {
        console.log(this.$store.getters.ranking250)
        return this.$store.getters.ranking250
      },
      loadingMoving () {
        console.log(this.$store.getters.loadingMoving)
        return this.$store.getters.loadingMoving
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  #wrapper {
    width: 950px;
    margin: 0 auto
  }

  #content {
    min-height: 420px
  }
  .grid-16-8 .article {
    float: left;
    width: 590px;
    padding-right: 40px;
  .switch-to-shuo {
    float: right;
    margin-top: -45px;
  a{
    display: block;
    width: 134px;
    height: 38px;
    background: url(/f/shire/6822457a2fc71115d0774dfaf5c9d245577d5992/pics/switch_to_shuo.png) no-repeat left top
  }
  a:hover {
    background-position: left -38px
  }
  a:active {
    background-position: left -76px
  }
  }
  .aside {
    float: right;
    width: 310px
  }
  }
  .grid-4-14-6{
  .nav {
    float: left;
    width: 150px;
    margin-right: 10px
  }
  .article {
    float: left;
    width: 540px;
    padding-right: 10px
  }
  .aside {
    float: right;
    width: 230px
  }
  }
  .pl2 {
    font: 14px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666
  }
  .indent {
    word-break: break-all
  }

  #table {
    float: left;
    margin: 0 -310px 0 0;
    width: 100%
  }

  #in_table {
    margin: 0 310px 0 0;
    padding: 0 40px 0 0;
    min-height: 500px
  }

  #tabler {
    float: right;
    width: 310px;
    overflow: hidden;
    word-break: break-all
  }
  table{
    border-bottom: 1px dashed #ccc;
    padding: 13px 0px;
    display: block;
  }
  #tablem {
    float: left;
    margin: 0 -270px 0 0;
    width: 100%
  }

  #in_tablem {
    margin: 0 270px 50px 0;
    padding: 0 40px 0 0
  }

  #tablerm {
    float: right;
    width: 270px;
    overflow: hidden;
    word-break: break-all
  }

  #tables {
    float: left;
    margin: 0 -240px 0 0;
    width: 100%
  }

  #in_tables {
    margin: 0 240px 0 0;
    padding: 0 40px 0 0;
    min-height: 500px
  }
  a {
    cursor: pointer
  }

  a:link {
    color: #37a;
    text-decoration: none
  }

  a:visited {
    color: #666699;
    text-decoration: none
  }

  a:hover {
    color: #FFFFFF;
    text-decoration: none;
    background: #37a
  }

  a:active {
    color: #FFFFFF;
    text-decoration: none;
    background: #FF9933
  }

  a img {
    border-width: 0;
    vertical-align: middle
  }
  #tablers {
    float: right;
    width: 240px;
    overflow: hidden;
    word-break: break-all
  }

  #tablerb .indent,#tabler .indent,#tablerm .indent {
    margin-bottom: 40px;
    overflow: hidden
  }

  .aside .indent {
    margin-bottom: 40px
  }

  .notify input {
    margin-top: 9px
  }

  .mbt {
    padding: 0;
    margin: 0;
    clear: both;
    word-wrap: break-word;
  tr {
    vertical-align: top
  }
  }
  .pl {
    font: 12px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666;
    margin:12px 0;
  }

  .pl2 {
    font: 14px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }

  .clearfix {
    zoom:1;display: inline-block;
    _height: 1px
  }

  * html .clearfix {
    height: 1%
  }

  .clearfix {
    display: block
  }

  .mbtl {
    float: left;
    width: 55px;
    margin: 8px 7px 0 0;
    padding: 0
  }

  .mbtr {
    border-bottom: 1px solid #eee;
    padding: 5px 0;
    min-height: 55px;
    overflow: hidden;
    margin: 5px 0 5px 0
  }

  .mbtr2 {
    margin-bottom: 20px;
    overflow: hidden
  }

  ul .mbtr2 {
    border-bottom: 1px solid #ddd
  }

  .mbtrdot {
    padding: 4px 0;
    min-height: 55px;
    overflow: hidden
  }

  .mbtrmini {
    border-bottom: 1px dashed #ddd;
    padding: 4px 0 4px 12px;
    background: url(/f/shire/f401be4d392b6e745a52fa51664a5da4a38ebb59/pics/listdot.gif) 0 8px no-repeat
  }
  .allstar35 {
    background-position: 0 -33px
  }
  .allstar50,.allstar45,.allstar40,.allstar35,.allstar30,.allstar25,.allstar20,.allstar15,.allstar10,.allstar05,.allstar00,.rating1-t,.rating15-t,.rating2-t,.rating25-t,.rating3-t,.rating35-t,.rating4-t,.rating45-t,.rating5-t,.rating-t,.starb ~ .stars5,.starb ~ .stars4,.starb ~ .stars3,.starb ~ .stars2,.starb ~ .stars1,.collectors .stars5,.collectors .stars4,.collectors .stars3,.collectors .stars2,.collectors .stars1 {
    display: inline-block;
    *display: inline;
    zoom:1;background: url(/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) no-repeat;
    background: -webkit-image-set(url(/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) 1x, url(/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s@2x.png) 2x) no-repeat;
    background: -moz-image-set(url(/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) 1x, url(/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s@2x.png) 2x) no-repeat;
    background: -o-image-set(url(/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) 1x, url(/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s@2x.png) 2x) no-repeat;
    background: -ms-image-set(url(/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) 1x, url(/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s@2x.png) 2x) no-repeat;
    width: 55px;
    height: 11px;
    margin: 0 3px 0 0;
    overflow: hidden
  }

  .ul {
    border-bottom: 1px dashed #DDDDDD;
    line-height: 100%;
    clear: both;
    margin-top:12px;
  }

</style>
