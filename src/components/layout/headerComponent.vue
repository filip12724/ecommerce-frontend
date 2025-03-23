<template>
    <header class="bg-blue-700 shadow-lg sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <router-link 
          to="/home" 
          class="flex items-center gap-3 group transition-transform hover:scale-105"
        >
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span class="text-2xl font-bold text-white tracking-tight">ModernShop</span>
        </router-link>
  
        <ul class="hidden md:flex items-center gap-6">
          <li v-for="(link, index) in links" :key="index">
            <router-link 
              :to="link.path" 
              class="text-white/90 hover:text-white font-medium px-3 py-2 rounded-lg transition-all
                     hover:bg-blue-600/10 hover:shadow-sm"
              active-class="text-white bg-blue-600/20 shadow-sm"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
  
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-white hover:bg-blue-600/10 rounded-lg transition-colors"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>
  
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden bg-blue-800/95 backdrop-blur-sm text-center"
      >
        <ul class="flex flex-col py-4 px-6 space-y-3">
          <li v-for="(link, index) in links" :key="index">
            <router-link 
              :to="link.path" 
              class="block text-white/90 hover:text-white font-medium px-3 py-2 rounded-lg transition-all
                     hover:bg-blue-600/10"
              active-class="text-white bg-blue-600/20"
              @click="toggleMobileMenu"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
    data() {
      return {
        isMobileMenuOpen: false,
        links: [
          { name: 'Home', path: '/home' },
          { name: 'Shop', path: '/shop' },
        ]
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      }
    }
  };
  </script>