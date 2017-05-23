<template>
  <div class="head-center">
    <div class="search-wrapper">
      <i class="icon icon-sm search"></i>
      <input @click="goToSearch()" type="search" class="search-input" placeholder="搜索歌词">
    </div>
  </div>

</template>
<script>
  export default{
      data(){
          return {}
      },
    methods:{
      goToSearch(){
            var locNow=window.location.href;
           /* if(locNow.indexOf('Search')==-1){
                 this.$router.push()
            }*/
           console.log(locNow)
      }
    }
  }
</script>
<style scoped>
  .head-center{
    flex: 6;
  }
  .search_wrapper{

  }
  .search{
    background: url("../../../static/images/find_music/search.png") ;position: absolute;left: 20%;top:10px;
  }
  .search-input{border: 0;display:inline-block;height: .5rem;border-radius:30px;width:100%;margin: 0 0;background: #e6e6e6;padding: 0 20%;}

  .search-input:focus{border: none;}
  .search-wrapper{
    background: #fff;font-size: 12px;height: 26px;line-height: 26px;border-radius: 30px;position: relative;margin-top: 3px;
  }
</style>
