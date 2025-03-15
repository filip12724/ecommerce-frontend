<template>
    <div class="min-h-screen bg-gray-50">

      <section class="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 shadow-lg">
        <div class="container mx-auto px-6 max-w-6xl">
          <div class="text-center">
            <h1 class="text-5xl font-bold mb-6 tracking-tight">Welcome to Our Store</h1>
            <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our premium collection of carefully curated products designed to elevate your everyday life.
            </p>
            <button class="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:shadow-lg transform transition hover:-translate-y-0.5">
              <router-link to="/shop">Explore Collection</router-link>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
  
      <section class="py-16 container mx-auto px-6 max-w-6xl">
        <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <productCard
          v-for="(product,index) in products"
          :key="index"
          :product="product"
          @add-to-cart="handleAddToCart"
          />

        </div>
      </section>
    </div>
  </template>
  
  <script>
  import productCard from '@/components/layout/ui/productCard.vue';
  export default {
    components: {productCard},
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
    },
    methods:{
      handleAddToCart(){
        console.log("Product added to cart");
      }
    }
  };
  </script>