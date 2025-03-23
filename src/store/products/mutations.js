export default{
    setProducts(state,products){
        state.products = products.data || products;
    },
    setSearchTerm(state, term) {
        state.searchTerm = term
    },
    setSortBy(state, sort) {
        state.sortBy = sort;
    },
    setError(state, error) {
        state.error = error;
    },
    clearError(state) {
        state.error = null;
      },
}