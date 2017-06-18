<template>
    <div class="icon-back-component background" @click="goback()">

    </div>
</template>
<style>
  .icon-back-component{
     flex-shrink: 1;
      width: .32rem;
      height: .32rem;
      background-image: url("../../../static/images/find_music/arrow.png");
  }

</style>
<script>
    export  default{
      methods:{
        goback(){
            this.$router.go(-1);
        }
      }
    }
</script>
