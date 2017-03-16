<template>
  <div class="container-moving">
    <div class="content">
      <h1>
        <span class="title">{{movieDetail.title}} {{movieDetail.original_title}}</span>
        <span class="year">{{movieDetail.year}}</span>
      </h1>
      <div class="detail">
        <div class="left-side">
          <div class="actor-list">
            <div class="subject">
              <div class="mainpic">
                <a href="https://movie.douban.com/subject/25900945/photos?type=R"><img :src="movieDetail.images.medium" alt="" title="点击查看更多海报"></a>
                <p><a class="more-pic" href="https://movie.douban.com/subject/25900945/edit">更新描述或海报</a></p>
              </div>
              <div class="info">
                <span class="p1">导演: </span><span v-for="item in movieDetail.directors" class="attrs">{{item.name}}</span><br>
                <span class="p1">编剧: </span><span v-for="item in movieDetail.writers" class="attrs">{{item.name}}</span><br>
                <span class="p1">主演: </span><span v-for="item in movieDetail.casts" class="attrs">{{item.name}}/</span><br>
                <span class="p1">类型: </span><span v-for="item in movieDetail.genres" class="attrs">{{item}}/</span><br>
                <span class="p1">制片国家/地区: </span><span v-for="(item,index) in movieDetail.countries" class="attrs">{{item}}</span><br>
                <span class="p1">语言: </span><span class="attrs">比尔·康顿</span><br>
                <span class="p1">上映日期: </span><span v-for="item in movieDetail.pubdates" class="attrs">{{item}}</span><br>
                <span class="p1">片长: </span><span class="attrs">{{movieDetail.durations}}</span><br>
                <span class="p1">IMDb链接: </span><span class="attrs"></span><br>
              </div>
            </div>
            <div class="people-sroce">
              <div>
                <p>豆瓣评分</p>
                <el-rate></el-rate>
                <p>尚未上映</p>
              </div>
            </div>
          </div>
          <div class="insterest-people">
            <div class="top">
            <a href=""><button>想看</button></a>
            <a href=""><button>看过</button></a>
            <span class="score-to">评价:
                <el-rate show-text></el-rate>
                </span>
            </div>
          </div>
          <div class="gtleft">
            <ul class="ul">
              <li><img src="https://img3.doubanio.com/f/shire/cc03d0fcf32b7ce3af7b160a0b85e5e66b47cc42/pics/short-comment.gif" alt=""><a href="">写短评</a></li>
              <li><img src="https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif" alt=""><a href="">写影评</a></li>
              <li><img src="https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif" alt=""><a href="">提问题</a></li>
              <li><img src="https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif" alt=""><a href="">添加到豆列</a></li>
              <li><img src="" alt=""><a href="">分享到</a></li>
            </ul>
          </div>
        </div>
        <div class="right-side">
          <div class="ticket">
            <a class="ticket-btn" href="https://movie.douban.com/subject/25900945/cinema/?from=subject-page">豆瓣购票23元起</a>
          </div>
          <div class="game-pic"><img src=" https://img3.doubanio.com/img/files/file-1489162292.jpg " alt=""></div>
          <div class="qrcode-app"><a href=""></a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {

      }
    },
    mounted () {
      let id = this.$route.query.id
      this.$store.commit('MOVING_ID', {id})
      this.$store.dispatch('getMovieDetail')
    },
    watch () {

    },
    computed: {
      movieDetail () {
        return this.$store.getters.movieDetail
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .container-moving{
    width: 950px;
    margin: 0 auto;
    .content{
      min-height: 420px;
      h1{
        word-break: break-all;
        display: block;
        font-size: 25px;
        font-weight: bold;
        color: #494949;
        padding: 0 0 15px 0;
      }
      .detail{
        .left-side{
          float: left;
          width:590px;
          padding-right: 40px;
          .actor-list{
            margin-bottom: 30px;
            .subject{
              width:415px;
              float: left;
              .mainpic{
                margin: 3px 12px 0 0;
                max-width: 155px;
                overflow: hidden;
                text-align: center;
                float: left;
                a{
                  img{
                    margin-bottom: 10px;
                    max-width: 100px;
                  }
                }
                .more-pic{
                  text-decoration: none;
                  color: #BBBBBB;
                  font-size: 12px;
                  text-align: center;
                }
              }
              .info{
                float: left;
                max-width: 248px;
                word-wrap: break-word;
                .p1{
                  line-height: 150%;
                  color: #666666;
                }
                .attrs{
                  color: #37a;
                }
              }
            }
            .people-sroce{
              float: left;
              width:155px;
              margin: 2px 0 0 0;
              padding: 0 0 0 15px;
              border-left:1px solid #eaeaea;
            }
          }
          .insterest-people{
            clear: both;
            padding:20px 0 3px;
            .top{
                button{
                  display: inline-block;
                  width:50px;
                  height: 25px;
                  background:#fae9da;
                  border: 1px solid #ca6445;
                  color: #333;
                  margin-right: 10px;
                  border-radius: 4px;
                }
            }
            .score-to{
              .el-rate{
                margin-left: 5px;
                display: inline-block;
                .el-rate__icon{
                  font-size: 12px;
                }
              }
            }
          }
          .gtleft{
            padding: 4px 4px 0 0;
            float: left;
            .ul{
              padding-top: 6px;
              li{
                float: left;
                display: inline;
                line-height: 14px;
                margin-right: 15px;
                img{
                  max-width: 100%;
                  margin-right: 5px;
                }
                a{
                  text-decoration: none;
                  color: #37a;
                }
              }
            }
          }
        }
        .right-side{
          float: right;
          width:310px;
          .ticket{
            padding:20px 0;
            margin-bottom: 40px;
            background-color: #F0F3F5;
            color: #999;
            font-size: 13px;
            text-align: center;
            a{
              display: inline-block;
              width:160px;
              line-height: 30px;
              background: #268dcd;
              border-radius: 2px;
              color: #fff;
            }
          }
          .game-pic{
            img{
              display: inherit;
              margin: 0 auto;
            }
          }
          .qrcode-app{
            margin: 20px 0;
            border: none;
          }
        }
      }
    }
  }

</style>
