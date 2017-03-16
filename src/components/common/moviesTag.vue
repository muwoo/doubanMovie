<template>
  <div class="moviesList" v-loading="loadingMoving">
    <div class="movieTag" v-for="(subject,index) in data.subjects">
      <ul>
        <li class="film-pic">
          <a @click="showDetail(subject.id)">
            <img  :src="subject.images.large" alt="">
          </a>
        </li>
        <li class="film-name">
          <a href="">{{subject.title}}</a>
        </li>
        <li class="film-rate">
          <el-rate
            v-model="subject.rating.average"
            disabled>
          </el-rate>
          <span class="rateNum">{{subject.rating.average * 2}}</span>
        </li>
        <li class="film-button">
        <span>
          <a href="">特惠选座</a>
        </span>
        </li>
      </ul>
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
      value:0,
      subject: {}
    }
  },
  watch: {
    data () {
      console.log(this.data);
    }
  },
  methods: {
    showDetail (id) {
      this.$router.push({path:'/moviesDetail'})
      this.$store.commit('MOVING_ID', {id: id})
    }
  },
  computed: {
    loadingMoving () {
      return this.$store.getters.loadingMoving
    }
  }
}
</script>
<style rel="stylesheet/less" lang="less">
.moviesList{
  width: 950px;
  margin: 30px auto 0;
  min-height: 500px;
  .movieTag{
    width: 118px;
    height: 270px;
    overflow: hidden;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    margin: 0 20px 20px 20px;
    ul{
      margin: 0 auto;
      padding: 0;
      li{
        list-style: none;
      }
    }
    a{
      cursor: pointer;
      text-decoration: none;
    }
    .film-pic{
      height: 180px;
      margin-bottom: 12px;
      overflow: hidden;
      a{
        img{
          width: 128px;
          vertical-align: middle;
        }
      }
    }
    .film-name{
      font-size: 14px;
      white-space: nowrap;
      height: 22px;
      overflow: hidden;
      a{
        display: inline-block;
        word-spacing: normal;
        height: 24px;
        line-height: 24px;
        text-decoration: none;
        color: black;
      }
    }
    .film-rate{
      display: inline-block;
      margin: 4px auto 2px;
      height: 19px;
      .el-rate{
        display: inline-block;
        .el-rate__icon{
          font-size: 12px;
        }
      }
      .rateNum{
        display: inline-block;
        font-size: 12px;
      }
    }
    .film-button{
      span{
        display: block;
        margin:0 auto;
        text-align: center;
        width: 90px;
        height: 24px;
        line-height: 24px;
        background-color:#268dcd;
        border-radius: 2px;
        a{
          color: #fff;
        }
      }

    }

  }
}
</style>
