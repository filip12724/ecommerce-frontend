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
  components: { productCard },
  computed: {
    products() {
      return this.$store.getters['products/getProducts'];
    }
  },
  created() {
    this.$store.dispatch('products/getProducts');
  },
  methods: {
    handleAddToCart() {
      console.log("Product added to cart");
    }
  }
};

</script>

<style>

</style>