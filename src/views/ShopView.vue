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
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
              </div>
          </div>
      </div>
  
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <productCard
              v-for="(product,index) in products"
              :key="index"
              :product="product"
              @add-to-cart="handleAddToCart"
          />
          <div v-if="isLoading" class="mb-8 text-center text-blue-600">
            Loading products...
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
      debouncedSearch: null
    }
  },

  watch: {
    searchedInput(newVal) {
      this.debouncedSearch(newVal);
    },
    selectedSort(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.fetchProducts();
      }
    }
  },

  computed: {
    error() {
      return this.$store.state.products.error;
    },
    products() {
      return this.$store.getters['products/getProducts'];
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
        sort: this.selectedSort 
      };
      
      try {
        this.isLoading = true;
        this.$store.commit('products/clearError');

        await this.$store.dispatch('products/getProducts', params);

      } catch (unexceptedError) {
         console.error('Component error:', unexceptedError);
      } finally {
        this.isLoading = false;
      }
    },
    handleSortChange() {
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