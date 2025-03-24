import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default{
    namespaced:true,
    state(){
        return{
            products:[],
            searchTerm: '',
            sortBy: '',
            error: null,
            pagination:{
                currentPage: 1,
                totalPages: 1,
                perPage: 6,
                totalProducts: 0,
            }
        }
    },
    actions,
    getters,
    mutations
}