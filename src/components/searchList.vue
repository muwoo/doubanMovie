<template>
  <div class="search-list" v-loading="searchLoading">
    <searchTag v-for="(subject,index) in searchList.subjects" :subject="subject" :key="index"></searchTag>
  </div>
</template>

<script>

  export default{
    data () {
      return {

      }
    },
    mounted () {
      if (this.searchText === '') {
        let searchText = this.$route.query.searchText
        this.$store.commit('SEARCH_TEXT', {searchText})
        this.$store.dispatch('getSearchList')
      }
    },
    components: {
      'searchTag': (resolve) => {
        require(['./common/searchTag.vue'], resolve)
      }
    },
    computed: {
      searchText () {
        return this.$store.getters.searchText
      },
      searchList () {
        return this.$store.getters.searchList
      },
      searchLoading () {
        return this.$store.getters.searchLoading
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .search-list{
    width: 950px;
    min-height: 500px;
    margin: 30px auto;
  }
</style>
