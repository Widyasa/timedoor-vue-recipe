<script setup>
defineProps({
  recipes : Array
})
</script>

<template>
<div class="flex justify-center text-center">
  <h1 class="text-5xl">All Recipes</h1>
</div>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <div v-for="(item, index) in recipes" :key="index" class="card border p-4 rounded">
      <img :src="item.imageLink" alt="" class="card-img-top w-full aspect-video rounded">
      <p class="mt-3 text-black">{{item.category}}</p>
      <h6 class="text-xl font-semibold">{{item.name}}</h6>
      <p class="mt-5 capitalize">Recipe By {{item.username}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>