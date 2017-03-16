<template>
  <li class="item upComing">
    <a class="thumb" :href="item.alt">
      <img :src="item.images.small" class="">
    </a>
    <div class="intro">
      <h3>
        <a :href="item.alt" class="">{{item.title}}</a>
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
</template>
<script>

  export default{
    data () {
      return {

      }
    },
    props: {
      /**
       * item 电影条目
       */
      item: {
        type: Object,
        default: {}
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  @import '../../../style/base.less';
  .item.upComing {
    position: relative;
    float: left;
    padding: 20px 0 20px 120px;
    width: 173px;
    height: 140px;
    border-bottom: 1px dashed #ccc;
    .thumb {
      position: absolute;
      left: 0;
      width: 100px;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
      }
    }
  }
</style>
