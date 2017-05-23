<template>

  <div>
    <div class="container">
      <index-top></index-top>
      <index-nav></index-nav>
      <FootBar></FootBar>
    </div>
  </div>
</template>
<script>
    import IndexTop from './index/IndexTop.vue'
    import IndexNav from './index/IndexNav.vue'
    import  FootBar from './common/FootBar.vue'
    export default{
        name:'index',
        data(){
            return {};
        },
      computed:{
            songMsg(){
                return this.$store.state.songMsg
            }
      },
      components:{
            IndexTop,IndexNav,FootBar
      }
    }
</script>
<style scoped>
    .padding-bottom{
         padding-bottom: .635rem;
    }
</style>
