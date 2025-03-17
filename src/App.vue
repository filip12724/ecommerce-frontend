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

</style>
