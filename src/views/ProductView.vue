<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="loading" class="text-center py-12">
        <div class="text-lg text-gray-600 min-h-screen flex justify-center items-center">
          <span class="loader"></span>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-12">
        <div class="text-red-600 text-lg font-medium">{{ error }}</div>
      </div>

      <div v-else class="bg-white shadow-lg rounded-2xl overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

          <div class="aspect-square bg-gray-100 rounded-xl overflow-hidden">
            <img 
              :src="require('@/assets/images/basic.jpg')"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>


          <div class="flex flex-col gap-6">
            <h1 class="text-3xl font-bold text-gray-900">{{ product.name }}</h1>

            <div class="flex items-center gap-4">
              <span class="text-2xl font-bold text-blue-600">
                {{ formattedPrice }}
              </span>
              <span 
                :class="{
                  'bg-green-100 text-green-800': product.stock > 0,
                  'bg-red-100 text-red-800': product.stock <= 0
                }"
                class="px-3 py-1 rounded-full text-sm font-medium"
              >
                {{ stockStatus }}
              </span>
            </div>

            <div class="space-y-4">
              <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>
              
              <div class="flex flex-wrap gap-2">
                <p>Categories:</p>
                <span 
                  v-for="category in product.categories" 
                  :key="category.id"
                  class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {{ category.name }}
                </span>
              </div>
            </div>

          
            <div class="mt-4 border-t pt-4">
              <dl class="grid grid-cols-2 gap-4">
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Availability</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    {{ product.stock > 0 ? `${product.stock} in stock` : 'Out of stock' }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: null,
      loading: true,
      error: null
    }
  },
  computed: {
    stockStatus() {
      return this.product.stock > 0 ? 'In Stock' : 'Out of Stock';
    },
    formattedPrice() {
      return `$${Math.round(this.product.price)}`;
    }
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const productId = this.$route.params.id;
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
        this.product = response.data;
      } catch (err) {
        this.error = 'Failed to fetch product details. Please try again later.';
      } finally {
        this.loading = false;
      }
    }
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.loading = true;
        this.fetchProduct();
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #FFF;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-bottom: 4px solid #FF3D00;
  border-left: 4px solid transparent;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>