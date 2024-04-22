<script setup>

import SearchBar from '@/components/navigation/SearchBar.vue'
import SignupBtn from '@/components/navigation/SignupBtn.vue'
</script>

<template>
<nav class="flex justify-between py-4 w-full container">
  <div class="flex gap-3 items-center font-semibold">
      <img src="@/assets/logo.svg" alt="Logo Brand" class="w-8 h-8">
    Recipee
  </div>
  <div class="flex gap-3">
   <SearchBar />
    <SignupBtn />
  </div>
</nav>
</template>

<style scoped>

</style>