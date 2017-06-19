<template>
  <div class="music-list-component background" :style="{'backgroundImage': 'url(' + creator.backgroundUrl + ')'}">
      <div class="flex music-list-header"  >
        <icon-back></icon-back>
        <h3 class="music-lis-title font-size-16 text-ellipsis">歌单</h3>
        <div class="music-list-search background">
          <i class="icon icon-ellipsis-white"></i>
          <i class="icon icon-playing" ></i>
        </div>
      </div>
    <div class="flex music-list-message">
      <div class="music-list-message-cover-container">
        <img src="../../static/images/player/album.png" class="music-list-cover">
        <div class="music-list-message-listen-count">
            <span>{{songListInfo.playCount|wan}}</span>
            <i class="music-list-message-listen-icon" style="margin: 0"></i>
        </div>
      </div>
      <div class="flex music-list-message-detail">
        <div class="music-list-message-name">{{songListInfo.name}}</div>
        <div class="music-list-message-creator-info">
           <div class="music-list-message-creator-avatar-info">
               <div class="music-list-message-creator-avatar-container">
                 <img :src="creator.avatarUrl" class="music-list-message-cover-avatar">
               </div>
             <div class="flex music-list-message-creator-name">
               <span>{{creator.nickname}}</span>
               <i class="icon icon-arrow" style="margin: 0"></i>
             </div>
           </div>
        </div>
      </div>

    </div>
    <div class="flex music-list-operation">
       <div class="operation-collect">
         <div class="operation-collect-icon background"></div>
         <div class="operation-collect-count">{{songListInfo.subscribedCount}}</div>
       </div>
       <div class="operation-comment">
           <div class="operation-comment-icon background"></div>
           <div class="operation-comment-count">{{songListInfo.commentCount}}</div>
       </div>
       <div class="operation-share">
         <div class="operation-share-icon background"></div>
         <div class="operation-share-count">{{songListInfo.shareCount}}</div>
       </div>
       <div class="operation-download">
         <div class="operation-download-icon background"></div>
         <div class="operation-down-string font-size-10 ">下载</div>
       </div>
    </div>
    <div class="music-list-playlist">
        <div class="flex music-list-playlist-header">
          <div class="music-list-playlist-icon-title background"></div>
      <h3 class="music-list-playlist-title font-size-16" >播放全部
        <span class="font-size-14 music-list-playlist-count">(共{{songListInfo.trackCount}}首)</span></h3>
          <div class="music-list-playlist-icon-setting background"></div>
        </div>
        <ul class="music-list">
            <template v-for="(item,index) in tracks">
                <li class="flex music-list-item" @click="playThis(item,index)" :key="item.id">
                   <div v-if="songMsg.id!==item.id" class="music-list-item-index">
                     <span>{{index+1}}</span>
                   </div>
                  <div v-else class="music-list-item-playing background"></div>
                   <div class="music-item-container">
                       <div class="music-item text-ellipsis">
                            <div class="flex music-detail"> {{item.name}}</div>
                            <div class="flex music-singer">{{item.al.name}} </div>
                       </div>
                       <div class="icon-ellipsis background">qwqw</div>
                   </div>
                </li>
            </template>
        </ul>
    </div>
  </div>
</template>
<script>
     import IconBack from './common/IconBack.vue'
  export default{
         components:{IconBack},
         data(){
           return {
             creator:{},
             songListInfo:{},
             tracks:[]
           }
         },
     computed:{
               pId(){
                   return this.$route.params.id
               },
               songMsg(){
                   return this.$store.state.songMsg;
               }
    }
         ,methods:{
               loadData(){
                   this.$http({url:'music.php',params:{pId:this.pId}}).then(function (res) {
                        if(res.data.code==200){
                           this.songListInfo=res.data.playlist
                          this.creator=res.data.playlist.creator
                          this.tracks=res.data.playlist.tracks
                        }
                     })
               },playThis(songMsg,index){
                   console.log(this.songMsg.id,songMsg.id)
                if(this.songMsg.id===songMsg.id){
                    this.$router.push({name:'player'})
                    return
                }
               this.$store.dispatch('setSongMsg',{
                   id: songMsg.id, //  歌曲id
                 name: songMsg.name, // 歌曲名称
                 artists: songMsg.ar, //  演唱歌手
                 album: songMsg.al, //  专辑信息，主要用于封面图及背景高斯模糊
                 mvid: songMsg.mv //  mv链接ID，0为没有id
               })
      }
    },
      created(){
             this.loadData();
      }
  }
</script>
<style>
  .music-list-component{
      display: flex;
      flex-direction:column ;
    background-size: 100%;
  }
  .music-list-header{
     justify-content: space-between;
    align-items: center;
      flex-shrink: 0;
  }
  .music-lis-title{
 color: #fff;line-height: 1 ;text-align: center;
  }
  .music-list-search{
      width: 1rem ;height: .25rem;
  }
  .music-list-message{
       flex-shrink:0 ;
     padding: 0 5%;
     margin: 10px 0;
     height: 2rem;
  }
  .icon-ellipsis-white{
    background-image: url("../../static/images/find_music/ellipse.png");
  }
  .icon-playing{
    background-image: url("../../static/images/find_music/playing-white.png");
    margin-left: .2rem;
  }
  .music-list-message-cover-container{
    position: relative;flex: 2 ;margin-right: .25rem;width: 2rem; height: 2rem;
  }
  .music-list-cover{
      width: 100%;height: 100%;
  }
  .music-list-message-listen-count{
      position: absolute;right:0;top:0;color: #fff;width: 100%;
  }
  .music-list-message-listen-count>span{
       float: right;line-height: .32rem;margin: 0 .05rem;
  }
  .icon {
    width: .32rem;height: .32rem; display: inline-block;background-size: contain;
  }
  .music-list-message-listen-icon{
    display: block; float:right; width: 0.32rem; height: 0.32rem;
    background-image: url('../../static/images/find_music/iconfont-listen.png');
    background-size: contain;
  }
   .music-list-message-detail{
       padding: .25rem 0;flex:3;-webkit-box-flex: 3;flex-direction: column;
   }
  .music-list-message-name{
        color: white;font-size: 14px;height: 50%;

  }
  .music-list-message-creator-avatar-info{
      height: 50%;
  }
  .music-list-message-creator-avatar-container{
      position: relative;width: .5rem;height: .5rem;float: left;
  }
  .music-list-message-cover-avatar{
      position: absolute;top:0;left: 0;width: 100%;height: 100%;
      border-radius: 50%;
  }
  .music-list-message-creator-name>span{
    float: left;
  }
  .music-list-message-creator-name{
      align-items: center; line-height: .5rem;color: white;
    padding-left: .2rem;
  }

  .music-list-message-creator-info{
        height: 50%;
  }
  .icon-arrow{
    background:url(../../static/images/find_music/arrow_right.png) center right no-repeat;
    width: .2rem;height: .2rem;margin-left: .1rem;float: left;padding-left: .1rem;
  }
  .music-list-operation{
      justify-content: space-around;
    margin-top: 0.125rem;margin-bottom: 0.15rem;
  }
  .operation-collect,.operation-comment,.operation-share,.operation-download{
      flex: 1;text-align: center;flex-grow: 1;color: white;
  }
  .operation-collect-icon,.operation-comment-icon,.operation-share-icon,.operation-download-icon{
    margin: 0 auto;height: .25rem;
    width: .25rem;
  }
  .operation-collect-icon {
    background-image: url("../../static/images/icon_collection.png");
  }
  .operation-comment-icon {
    background-image: url("../../static/images/icon_comment.png");
  }
  .operation-share-icon {
    background-image: url("../../static/images/icon_share.png");
  }
  .operation-download-icon {
    background-image: url("../../static/images/icon_download.png");
  }
  .music-list-playlist{
      background: white;flex-grow: 1;
  }
  .music-list-playlist-header{
      padding: 0 0.5rem;
    justify-content: space-between;
      align-items: center;
  }
  .music-list-playlist-icon-title,
  .music-list-playlist-icon-setting
  {
    width: .25rem;
    height: .25rem;
  }
  .music-list-playlist-icon-title
  {
    margin-right: 0.375rem;
    background-image: url("../../static/images/icon_play_all.png");
  }
  .music-list-playlist-icon-setting
  {
    background-image: url("../../static/images/icon_setting.png");
  }
  .music-list-playlist-title{
      flex: 1;flex-grow: 1;font-weight: normal;line-height: 1;
  }
  .music-list-playlist-count{
       color: #919293;
  }
  .music-list{
      border-top:1px solid #e5e7e8;
  }
  .music-list-item-index{
       flex-shrink:0 ;width: .5rem;height: .5rem;color: #919293;
      text-align: center;line-height: .5rem;
  }
  .music-list-item-container{
   padding: 5px 0;height: .5rem;flex: 9;flex-grow: 1;border-bottom: 1px solid #e5e7e8;
  }
  .music-item{
        flex-grow: 1;
  }
  .music-item-container {
    flex-grow: 1;
    height: .5rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e7e8;
    overflow: hidden;
    flex:9;
    padding: 5px 0;
  }

  .music-detail {
    height:.3rem;
    padding-right: .2rem;
    align-items: center;
  }
  .icon-ellipsis{
      flex-shrink: 0;padding: 0.16rem;width:0.16rem;height: 100%;background-image: url("../../static/images/ellipse.png");
    background-size: cover;background-position:center center;
  }
  .icon-ellipsis-white{
      background-image: url("../../static/images/find_music/ellipse.png");
  }
  .music-list-item-playing {
    flex: 1;
    width: .5rem;
    height: .25rem;
    background: url("../../static/images/icon_loudspeaker_playing.png") center  no-repeat;
    background-size: contain;  text-align: center;
    line-height: .5rem;margin-top: .25rem;
  }
</style>
