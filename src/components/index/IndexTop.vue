<template>
    <div class="container">
         <div class="head-left">
           <a class="block" href=""><i class="icon mai"></i></a>
         </div>
     <SearchBar></SearchBar>
      <div class="head-right">
         <a class="block">
           <IconPlaying></IconPlaying>
         </a>
      </div>
    </div>
</template>
<script>
  import SearchBar from "../common/SearchBar.vue"
  import IconPlaying from "../common/playing.vue"
  export default{
      data(){
          return {
              name:top
          }
      },components:{
      SearchBar,IconPlaying
    }
  }
</script>
<style scoped>
  .container{
     display: flex;justify-content: space-around;padding: 5px 0;background: #fff;position: fixed;top:0;
    z-index: 100;width:100%;
  }
  .head-left{
    flex: 1;
  }
  .head-right{
    flex: 1;padding-left: 15px;
  }
  .icon{
     width: 32px;height: 32px;display: block;margin: 0 auto;
  }
  .mai{
     background:url("../../../static/images/find_music/MICROPHONE.png") ;
  }
  .search{
      background: url("../../../static/images/find_music/search.png"); position: absolute; left: 20%;top:4px;
  }
  .search-input{border: 0;height: 100%;border-radius:30px;width:100%;margin: 0 0;background: #e6e6e6;padding: 0 20%;}
  .search-input:focus{border: none;}
   ::-webkit-input-placeholder{
     color: #999;text-align: center;
   }
  :-moz-placeholder{
    color: #999;
  }
  :-ms-input-placeholder{
    color:#999
  }
</style>
