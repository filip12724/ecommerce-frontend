<template>
<section class="py-16 container mx-auto px-6 max-w-6xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <productCard
          v-for="(product,index) in products"
          :key="index"
          :product="product"
          @add-to-cart="handleAddToCart"
          />

        </div>
      </section>
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

<style>

</style>