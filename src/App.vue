<template>
  <header-component></header-component>
  <router-view/>
</template>

<script>
import headerComponent from "./components/layout/headerComponent.vue"

export default ({
  
  components:{
    headerComponent,
  },
  created(){
    this.$store.dispatch('products/getProducts')
  }
})
</script>


<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #f0f0f0 0%,
    #e0e0e0 100%
  ) !important;
  background-attachment: fixed;
}
</style>
