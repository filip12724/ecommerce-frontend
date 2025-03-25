import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default{
    namespaced:true,
    state(){
        return{
            categories:[]
        }
    },
    actions,
    getters,
    mutations
}