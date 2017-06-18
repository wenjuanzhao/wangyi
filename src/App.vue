<script src="router/index.js"></script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app{
    margin: 0;padding: 0;
  }
.index-component{padding-bottom: 40px;}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}

.icon{display: block;}
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}
body {
  background-color: #f2f4f5;
  font-size: 12px;
  color: #303131;padding: 0;margin: 0;
}
html, body, #app {
  height: 100%;
}
/*  重置样式  */
ul, h4, p {
  margin: 0;
  padding: 0;
}
/*  主色调  */
.primary-color {
  color: #d33a31;
}
.primary-bg-color {
  background-color: #d33a31;
}
/*  常用样式  */
.flex {
  display: flex;
}
.align-center {
  text-align: center;
}
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.background {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.keyword-hot-item {
  list-style: none;
  flex-shrink: 0;
  margin-top: 0.25rem;
  margin-right: 0.125rem;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  line-height: 2;
  border: 1px solid #ced0d0;
  border-radius: 0.5rem; /*  14px  */
}
.slide-enter-active, .slide-leave-active {
  transition: all .2s linear 0s;
}
.slide-enter, .slide-leave-active {
  -webkit-transform: translate3d(0, 3.25rem, 0);
  transform: translate3d(0, 3.25rem, 0);
  opacity: .8;
}
.icon-arrow-right {
  flex-shrink: 0;
  width: 0.2rem;
  height: 0.26rem;
  margin-top: .06rem ;
  line-height:.4rem;
  background-image: url('../static/images/index/yv.png');
}
.song-list-detail-listen-icon {
  display:block;
  float:left;
  width: 0.25rem;
  height: 0.25rem;
  background-image: url('../static/images/index/vn.png');
}
ul li{list-style: none;}
.my-list-component,.mv-list-component{margin-top:1.40rem;}
.ranking-list-component{margin-top:1.5rem;}
  i{
    margin: 0;
  }
</style>
