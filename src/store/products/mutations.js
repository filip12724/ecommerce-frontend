export default{
    setProducts(state,products){
        state.products = products.data || products;
    },
    setSearchTerm(state, term) {
        state.searchTerm = term
      }
}