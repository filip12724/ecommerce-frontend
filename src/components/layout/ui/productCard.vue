<template>
         <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="aspect-square bg-gray-100 overflow-hidden">
      <img 
        :src="require('@/assets/images/basic.jpg')"
        :alt="product.name" 
        class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ product.name }}</h3>
      <span class="text-sm text-gray-500">{{ product.stock }} in stock</span>
      <p class="text-2xl font-bold text-blue-600 mb-4">${{ Math.round(product.price) }}</p>
              <button class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
              @click="$emit('add-to-cart', product)">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
</template>

<script>
export default {
    props:{
        product:{
            type: Object,
            required: true,
        }
    },
    emits:['add-to-cart']
    
}
</script>

<style>

</style>