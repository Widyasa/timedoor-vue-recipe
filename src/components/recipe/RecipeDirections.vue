<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const recipeDetail = computed(() => {
  return store.state.recipe.recipeDetail
})
</script>

<template>
<div class="my-3" >
  <div class="card" >
    <div class="card-header" >
      <p class="fs-4 my-0 fw-semibold" >Directions</p>
    </div>
    <div class="card-body" >
      <div v-for="(item,index) in recipeDetail.directions">
        <p class="my-2 fs-5 fw-semibold" >Step {{index + 1}} </p>
        <p class="my-2" >{{item}}</p>
      </div>

    </div>
  </div>
</div>
</template>

<style scoped>

</style>