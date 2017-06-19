import API from '../api';
const api=new API();

var storeConfig = {
        state: {
          //音频播放对象
          audioDomElement:'',
          //播放器当前的播放状态  true为正在播放歌曲  false没有在播放
          playStatus:false,
          //设置底部菜单当前的被选中的项

          selected:'find_music',
          //当前正在播放的歌曲的信息
           songMsg:{}
        },
        actions: {
            SET_TABBAR(context,object){
              context.commit('set_tabbar',object)
            },
          //点击题目获取播放的歌曲
             setSongMsg({dispatch,commit,state},payload){
                //设置正在播放的歌曲的信息
                 state.songMsg=payload
               //ajax获取歌曲的url
          /*     var xhr = new XMLHttpRequest()
               var url = process.env.NODE_ENV !== 'production' ? 'http://demo.guojingfeng.com/api/music.php':'/api/music.php'
               xhr.open('POST',url,true);
                 xhr.onreadystatechange=function () {
                   if(xhr.readyState===4&&xhr.status===200){
                       var  data=JSON.parse(xhr.responseText);
                       console.log(data.data[0].url);
                       if(data.code==200){
                           state.audioDomElement.src=data.data[0].url
                         commit('playControl');
                       }
                   }
                 }
               xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8')
                 xhr.send('mp3Url='+payload.id)*/


             }
        },
        mutations: {
          set_tabbar(state,object){
            state.selected=object.selected
          },
          playControl(state){
              state.audioDomElement.play();
              state.playStatus=true
          }
        },
        getters: {


        }
    }
    /**
     * 返回一个规定范围内的随机数
     * @param startRange 最小范围
     * @param endRange 最大范围
     * @returns {number}
     */
function randomRange(startRange, endRange) {
    return Math.floor(Math.random() * (endRange + 1 - startRange) + startRange)
}
export default storeConfig
