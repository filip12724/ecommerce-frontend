import { createStore } from 'vuex'
import products from './products'
import categories from './categories'

export default createStore({
  modules: {
    products,
    categories
  }
})
