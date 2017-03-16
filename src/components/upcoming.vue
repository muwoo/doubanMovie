<template>
  <div class="grid-950 clearfix">
    <article class="container">
      <div class="tit">
        <h1>{{city}}-影讯</h1>
        <div id="" class="locat">
          <el-dropdown trigger="click" @command="changeCity">
            <span class="el-dropdown-link">
              [切换城市]
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(city,index) in citys" :command="city.name" :key="index">{{city.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="hd">
          <h2>影院上映</h2>
          <ul class="tab-hd clearfix">
            <li class="on">即将上映</li>
          </ul>
        </div>
      </div>
      <div class="two-list" v-loading="loadingUpComing">
        <ul class="clearfix">
          <upComingTag v-for="(item,index) in upcomBody.subjects" :item="item" :key="index"></upComingTag>
        </ul>
      </div>
    </article>
    <aside class="right-side">
      尴尬乌龙丨第89届奥斯卡获奖影片
    </aside>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        /**
         * 城市列表
         */
        citys: [
          {
            name: '北京'
          },
          {
            name: '上海'

          },
          {
            name: '广州'
          },
          {
            name: '深圳'
          },
          {
            name: '杭州'
          }
        ]
      }
    },
    mounted () {
      /**
       * 获取即将上映列表
       */
      this.$store.dispatch('getUpcoming')
    },
    methods: {
      /**
       * function 切换城市
       * @param command
       */
      changeCity (command) {
        this.$store.commit('UP_COMING', {loading: true})
        this.$store.commit('MOVIE_CITY', {city: command})
        this.$store.dispatch('getUpcoming')
      }
    },
    computed: {
      /**
       * function 获取即将上映列表
       * @returns {computed.upcomBody|getters.upcomBody|state.upcomBody|{}|*}
       */
      upcomBody () {
        return this.$store.getters.upcomBody
      },
      /**
       * function loading动画
       * @returns {computed.loadingUpComing|boolean|getters.loadingUpComing|*}
       */
      loadingUpComing () {
        return this.$store.getters.loadingUpComing
      },
      /**
       * function 获取当前城市
       * @returns {*|computed.city|string|getters.city}
       */
      city () {
        return this.$store.getters.city
      }
    },
    components: {
      'upComingTag': resolve => {
        require(['./common/upComingTag.vue'], resolve)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style rel="stylesheet/less" lang="less">
  @import '../../style/base.less';

  .container {
    float: left;
    width: 590px;
  }

  .right-side {
    float: right;
    width: 310px;
  }

  .two-list {
    min-height: 500px;
  }

  .tit {
    margin-top: 20px;
    h1 {
      display: inline-block;
      width: 90px;
      font-size: 20px;
      color: #000;
    }
    .locat {
      position: relative;
      display: inline-block;

    }
  }

  .locat {
    .cities-list {
      position: absolute;
      left: 0;
      top: 18px;
      padding: 10px;
      background: #fff;
      z-index: 999;
      border: 1px solid #ccc;
      span {
        display: block;
      }
    }
  }

  .tab-hd {
    vertical-align: bottom;
    li {
      margin: 0 5px;
      float: left;
    }
    .on {
      background-color: #69c;
      color: #fff;
      padding: 0 10px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
    }
  }

  .hd {
    padding: 10px 0;
    border-bottom: 1px dashed #ccc;
    h2, .tab-hd {
      display: inline-block;
    }
  }
</style>
