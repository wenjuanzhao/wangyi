<template>
  <div class="flex">
      <div class="flex-item" v-for="item in list">
        <div class="item">
             <i v-bind:class="item.className"></i>
        </div>
        <p >{{item.itemName}}</p>
      </div>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                list:[
                    {className:'fm',itemName:'私人FM'},
                    {className:'daily',itemName:'每日歌曲推荐'},
                    {className:'hot',itemName:'云音乐热歌榜'},
                    ]
            }
        },methods:{
                go(){
                    this.$router.push({name:'RankingList'})
                }
      }
    }
</script>
<style scope>
    .flex-item{
       padding: 10px 0 5px;width: 33.3333333%;text-align: center;
    }
    i{display: block;width: 32px;height: 32px;margin: 9px auto}
  .fm{
      background: url("../../../static/images/find_music/fm.png");
  }
  .daily{
    background: url("../../../static/images/find_music/dailysong.png");
  }
  .hot{
    background: url("../../../static/images/find_music/ranklist.png");
  }
  .item{
    border: 2px solid  #d33a31; height: 50px;width: 50px;margin: 0 auto .1rem;
     border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;
  }
</style>
