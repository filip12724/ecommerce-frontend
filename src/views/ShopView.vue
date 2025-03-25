<template>
  <section class="py-16 container mx-auto px-6 max-w-6xl">

    <div v-if="error" class="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error.message }}
      <button 
        @click="clearError" 
        class="float-right text-red-700 hover:text-red-900"
      >
        ×
      </button>
    </div>


    <div class="mb-4 sm:hidden">
      <button 
        @click="showFilters = !showFilters" 
        class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {{ showFilters ? 'Hide Filters' : 'Show Filters' }}
      </button>
    </div>

    <div class="flex flex-col sm:flex-row gap-8">

      <div :class="{'block': showFilters, 'hidden': !showFilters}" class="sm:block sm:w-64 space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold mb-4">Filter by Price</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <input 
                type="number" 
                placeholder="Min" 
                class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
              <span class="text-gray-400">–</span>
              <input 
                type="number" 
                placeholder="Max" 
                class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
            <input 
              type="range" 
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"
            >
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold mb-4">Categories</h3>
          <div class="space-y-3">
            <label 
              v-for="category in categories" 
              :key="category" 
              class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input 
                type="checkbox" 
                class="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                :value="category.id"
                v-model="selectedCategory"
                @change="handleCategoryFiltering"
              >
              <span class="text-gray-700">{{ category.name }}</span>
            </label>
          </div>
        </div>
      </div>


      <div class="flex-1">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <input 
            type="text" 
            name="search"
            v-model="searchedInput"
            placeholder="Search products..."
            class="w-full sm:max-w-md px-4 py-2 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   placeholder-gray-500 transition-all"
          >

          <div class="relative w-full sm:w-48">
            <select 
              v-model="selectedSort"
              @change="handleSortChange"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                     appearance-none pr-10"
            >
              <option value="">Sort by</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
            
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <productCard
            v-for="(product, index) in products"
            :key="index"
            :product="product"
            @add-to-cart="handleAddToCart"
          />

          <div v-if="isLoading" class="mb-8 text-center text-blue-600">
            Loading products...
          </div>
        </div>

        <div class="mt-8 flex justify-center items-center gap-4">
          <button 
            @click="currentPage -= 1" 
            :disabled="currentPage === 1 || isLoading"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span class="text-gray-700">
            Page {{ pagination.currentPage }} of {{ pagination.totalPages }}
          </span>
          <button 
            @click="currentPage += 1" 
            :disabled="currentPage >= pagination.totalPages || isLoading"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'; 
import productCard from '@/components/layout/ui/productCard.vue';

export default {
  components: { productCard },
  data() {
    return {
      isLoading: false,
      showFilters: false,
      selectedCategory: [],
      debouncedSearch: null,
    }
  },

  watch: {
    searchedInput(newVal) {
    this.currentPage = 1; 
    this.debouncedSearch(newVal);
  },
  selectedSort(newVal, oldVal) {
    if (newVal !== oldVal) {
      this.currentPage = 1;
      this.fetchProducts();
    }
  },
  currentPage() {
    this.fetchProducts()
  }
  },

  computed: {
    error() {
      return this.$store.state.products.error;
    },
    products() {
      return this.$store.getters['products/getProducts'];
    },
    categories(){
      return this.$store.getters['categories/getCategories'];
    },
    selectedSort:{
      get(){
        return this.$store.state.products.sortBy
      },
      set(value){
        return this.$store.commit('products/setSortBy',value)
      }
    },
    searchedInput: {
      get() {
        return this.$store.state.products.searchTerm
      },
      set(value) {
        this.$store.commit('products/setSearchTerm', value)
      }
    },
    currentPage: {
      get() {
        return this.$store.state.products.pagination.currentPage
      },
      set(value) {
        this.$store.commit('products/setCurrentPage', value)
      }
   },
    pagination(){
      return this.$store.state.products.pagination
    }
  },

  created() {
    this.debouncedSearch = _.debounce(this.fetchProducts, 500);
    this.fetchProducts();
    
  },

  methods: {

    async fetchProducts() {
      const params = {
        search: this.searchedInput,
        sort: this.selectedSort,
        page: this.currentPage,
        category: this.selectedCategory
      };
      
      try {
        this.isLoading = true;
        this.$store.commit('products/clearError');

        await this.$store.dispatch('products/getProducts', params);

        this.$nextTick(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      } catch (unexceptedError) {
         console.error('Component error:', unexceptedError);
      } finally {
        this.isLoading = false;
      }
    },
    handleSortChange() {
      this.fetchProducts();
    },
    handleCategoryFiltering(){
      this.fetchProducts();
    },
    clearError() {
      this.$store.commit('products/clearError');
    },
    handleAddToCart() {
      console.log("Product added to cart");
    }
  }
};
</script>

<style>

</style>