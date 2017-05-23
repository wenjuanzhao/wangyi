<template>
    <ul class="sole clearfix">
        <li v-bind:key="item.id"  v-bind:class="{lastone:$index==2}" v-for="item,$index in soleList" >
          <img :src="item.picUrl" class="sole_img">
          <p>{{item.copywriter}}</p>
        </li>
    </ul>
</template>
<script>
    import API from '../../api'
  var api=new API();
    export default{
        data(){
            return {
                soleList:[],
                last:{}
            }
        },
      methods:{
              getSoList(){
                  var _this=this;
                  api.get('personalized/privatecontent',{},function (res) {
                       if(res.code==200){
                           _this.soleList=res.result
                       }
                  })
              }
      },
      mounted(){
            this.getSoList()
      }
    }
</script>
<style scoped>
  .sole_img{width: 100%;height: 2rem}
  .sole li{width:49.5%;float: left;margin-bottom: .2rem;}
  .sole li:nth-child(2n){float: right;}
  .sole li p{padding: 0 2px;}
  .sole .lastone{float:none; width: 100%;margin-right: 0;}
</style>
