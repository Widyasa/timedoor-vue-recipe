<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/navigation/Navbar.vue'
import Footer from '@/components/navigation/Footer.vue'
</script>

<template>
  <Navbar />
  <main class="my-10">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>

</style>
