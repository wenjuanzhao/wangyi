<template>
    <div class="flex cate-title-component">
       <div class="vertical-line-left"></div>
       <h4 class="cate-title font-size-14">{{title}}</h4>
      <div class="icon-arrow-right background"></div>
    </div>
</template>
<script>
    export  default{
      props:{
        title:{
          Type:String,
          required:true
        }
      }
    }
</script>
<style>
  .cate-title-component{
    margin: .15rem 0;
    height: .4rem;
    align-items: flex-start;
  }
  .vertical-line-left{
     flex-shrink:0 ;
    height: 0.4rem;width: 0.05rem;background-color:#d33a31 ;
  }
  .cate-title{
     margin: 0;
    padding-left:.25rem;padding-right: .25rem;font-weight: normal;line-height: .4rem;
  }
  .icon-arrow-right{
       flex-shrink:0 ;
    width: .2rem;
    height:.26rem;margin-top: .06rem;line-height: .4rem;
    background: url("../../../static/images/index/yv.png");background-size: .2rem .26rem;
  }
</style>
