import API from '../api';
const api=new API();

var storeConfig = {
        state: {
          //设置底部菜单当前的被选中的项
          selected:'find_music'
        },
        actions: {
            SET_TABBAR(context,object){
              context.commit('set_tabbar',object)
            },
        },
        mutations: {
          set_tabbar(state,object){
            state.selected=object.selected
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
