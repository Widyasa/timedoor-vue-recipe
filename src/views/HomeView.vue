<script setup>
import Recipes from '@/assets/js/recipes.js'
import RecipeList from '@/components/recipe/RecipeList.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import Navbar from '@/components/navigation/Navbar.vue'
import Footer from '@/components/navigation/Footer.vue'

const store = useStore()
const recipeListStatus = ref(false)
const recipesList = ref()
onMounted(async () => {
  try {
    await store.dispatch("recipe/getRecipeData")
    recipeListStatus.value = true
    recipesList.value = store.state.recipe.recipes
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <main class="">
    <Navbar />
    <div class="my-10 container">
      <RecipeList :recipes="recipesList" />
    </div>
    <Footer />
  </main>
</template>
