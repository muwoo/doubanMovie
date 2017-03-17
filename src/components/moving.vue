<template>
  <div class="moving">
    <div class="tit">
      <h1>电影票 - {{city}}</h1>
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
          <li class="on">正在上映</li>
        </ul>
      </div>
    </div>
    <MoviesTag :data="movingList" class="movieTag"></MoviesTag>

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
       * 获取正在上映列表
       */
      this.$store.dispatch('getMoving')
    },
    methods: {
      /**
       * function 切换城市
       * @param command
       */
      changeCity (command) {
        this.$store.commit('MOVING_LOADING', {loading: true})
        this.$store.commit('MOVIE_CITY', {city: command})
        this.$store.dispatch('getMoving')
      }
    },
    components: {
      'MoviesTag': (resolve) => {
        require(['./common/moviesTag.vue'], resolve)
      }
    },
    computed: {
      /**
       * function 电影列表函数
       * @returns {computed.movingList|state.movingList|{subjects}|getters.movingList|*}
       */
      movingList () {
        return this.$store.getters.movingList
      },
      /**
       * function 获取当前城市
       * @returns {*|computed.city|string|getters.city}
       */
      city () {
        return this.$store.getters.city
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less">
  .moving {
    margin-bottom: 20px;
    p {
      color: red;
    }
    .tit {
      width: 950px;
      margin: 0 auto;
      margin-top: 20px;
      h1 {
        display: inline-block;
        width: 120px;
        font-size: 20px;
        color: #000;
      }
      .locat {
        position: relative;
        display: inline-block;

      }
      .hd{
        border: none;
      }
    }
  }
</style>
