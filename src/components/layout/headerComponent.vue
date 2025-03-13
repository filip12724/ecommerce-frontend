<template>
    <header class="bg-blue-700 shadow-lg sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <router-link 
          to="/home" 
          class="flex items-center gap-3 group transition-transform hover:scale-105"
        >
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span class="text-2xl font-bold text-white tracking-tight">ModernShop</span>
        </router-link>
  
        <!-- Navigation Links -->
        <ul class="flex items-center gap-6">
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
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
    data() {
      return {
        links: [
          { name: 'Home', path: '/home' },
          { name: 'Shop', path: '/shop' },
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contact' }
        ]
      };
    }
  };
  </script>