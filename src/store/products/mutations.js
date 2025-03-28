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
    setPagination(state,meta){
        state.pagination = {
            currentPage: meta.current_page,
            totalPages: meta.last_page,
            perPage: meta.per_page,
            totalProducts: meta.total
          };
    },
    setCurrentPage(state, page) {
        state.pagination.currentPage = page
    },
}