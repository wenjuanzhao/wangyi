<template>
 <div class="my-list-component">
    <index-banner></index-banner>
   <links></links>
   <cate-title title="推荐歌单"></cate-title>
   <div class="flex song-list-container">
     <song-list :id="447039671"></song-list>
     <song-list :id="560801222"></song-list>
     <song-list :id="560801223"></song-list>
   </div>
   <div class="flex song-list-container">
     <song-list :id="506913893"></song-list>
     <song-list :id="505747496"></song-list>
     <song-list :id="323396962"></song-list>
   </div>
   <cate-title title="独家放送"></cate-title>
   <SoleBroadcast></SoleBroadcast>
   <cate-title title="推荐mv"></cate-title>
   <div class="flex mv-recommend-container">
     <mv-recommend :id="372204"></mv-recommend>
     <mv-recommend :id="320111"></mv-recommend>
   </div>
   <div class="flex mv-recommend-container">
     <mv-recommend :id="372204"></mv-recommend>
     <mv-recommend :id="320111"></mv-recommend>
   </div>
   <cate-title title="主播电台"></cate-title>
   <DjList class="clearfix"></DjList>
 </div>
</template>
<script>
   import IndexBanner from  './IndexBanner.vue'
   import Links from '../common/Links.vue'
   import CateTitle from '../common/CateTitle.vue'
   import SongList from '../common/SongList.vue'
   import SoleBroadcast from '../common/SoleBroadcast.vue'
   import  MvRecommend from '../common/MvRecommend.vue'
   import  DjList from "../common/DjList.vue"
   export default{
     components:{IndexBanner,Links,CateTitle,SongList,SoleBroadcast,MvRecommend,DjList}

   }
</script>
<style scoped>
  .mv-recommend-container,
  .song-list-container{
    display: flex; justify-content: space-between; display: -webkit-box;
  }
</style>
