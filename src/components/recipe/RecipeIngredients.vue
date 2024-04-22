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
      <p class="fs-4 my-0 fw-semibold">Ingredients</p>
    </div>
    <div class="card-body" >
      <ul class="mb-0" >
        <li v-for="(item, index) in recipeDetail.ingredients" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>