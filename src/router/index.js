import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MusicList from '@/components/MusicList'
import MyList from '@/components/index/MyList'
import RankingList from '@/components/index/RankingList'
import SongMenu from '@/components/index/SongMenu'
import MvList from '@/components/index/MvList'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'',
          name:'MyList',
          component:MyList
        },
        {
          path:'songMenu',
          name:'SongMenu',
          component:SongMenu
        },
        {
          path:'rankingList',
          name:'RankingList',
          component:RankingList
        },
        {
          path:'mvList',
          name:'MvList',
          component:MvList
        },
      ]
    },
    {
      path:'/musicList/id',
      name:'MusicList',
      component:MusicList
    }
  ]
})
export default router
