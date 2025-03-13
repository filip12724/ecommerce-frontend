<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 shadow-lg">
        <div class="container mx-auto px-6 max-w-6xl">
          <div class="text-center">
            <h1 class="text-5xl font-bold mb-6 tracking-tight">Welcome to Our Store</h1>
            <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our premium collection of carefully curated products designed to elevate your everyday life.
            </p>
            <button class="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:shadow-lg transform transition hover:-translate-y-0.5">
              Explore Collection
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
  
      <!-- Products Section -->
      <section class="py-16 container mx-auto px-6 max-w-6xl">
        <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(product, index) in products"
            :key="index"
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div class="aspect-square bg-gray-100 overflow-hidden">
              <img 
                :src="product.image" 
                :alt="product.name" 
                class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ product.name }}</h3>
              <p class="text-2xl font-bold text-blue-600 mb-4">${{ product.price }}</p>
              <button class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { name: "Premium Wireless Headphones", price: "299.99", image: "https://via.placeholder.com/600x600" },
          { name: "Smart Fitness Tracker", price: "159.99", image: "https://via.placeholder.com/600x600" },
          { name: "Modern Desk Lamp", price: "89.99", image: "https://via.placeholder.com/600x600" },
          { name: "Leather Office Chair", price: "449.99", image: "https://via.placeholder.com/600x600" },
          { name: "Wireless Charging Pad", price: "39.99", image: "https://via.placeholder.com/600x600" },
          { name: "Noise-Canceling Earbuds", price: "199.99", image: "https://via.placeholder.com/600x600" }
        ]
      };
    }
  };
  </script>