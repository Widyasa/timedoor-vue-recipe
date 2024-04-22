<script setup>

import RecipeDescription from '@/components/recipe/RecipeDescription.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import RecipeIngredients from '@/components/recipe/RecipeIngredients.vue'
import RecipeDirections from '@/components/recipe/RecipeDirections.vue'
const store = useStore()
const route = useRoute()

onMounted(async () => {
  await store.dispatch(
    "recipe/getDetailRecipe", route.params.id
  )
})
</script>

<template>
<div class="col-12 col-sm-8">
  <RecipeDescription />
  <RecipeIngredients />
  <RecipeDirections />
</div>
</template>

<style scoped>

</style>