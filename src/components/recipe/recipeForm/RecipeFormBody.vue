<script setup>

import BaseInput from '@/components/ui/BaseInput.vue'
import BaseTextArea from '@/components/ui/BaseTextArea.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { reactive, ref } from 'vue'
import { store } from '@/stores/index.js'
import router from '@/router/index.js'
const dataCategory = ["Breakfast", "Lunch", "Dinner", "Meals", "Snacks"]
const recipeData = reactive({
  imageLink : "",
  name : "",
  description : "",
  category : "",
  prepTime : "",
  cookTime : "",
  totalTime : 0,
  ingredients : [],
  directions : []
})
const ingredientCount = ref(1)
const directionCount = ref(1)
const countTotalTime = () => {
  recipeData.totalTime = parseInt(recipeData.cookTime) + parseInt(recipeData.prepTime)
}
const addIngredient = () => {
  ingredientCount.value++
}
const addDirection = () => {
  directionCount.value++
}
const deleteIngredient = (index) => {
  recipeData.ingredients.splice(index,1)
  ingredientCount.value--
}
const deleteDirection = (index) => {
  recipeData.directions.splice(index,1)
  directionCount.value--
}

const checkImage = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)

  reader.addEventListener("load", () => {
    recipeData.imageLink = reader.result
  })
}
const addNewRecipe =  async () => {
  await store.dispatch("recipe/addNewRecipe", recipeData)
  await router.push("/user/user-recipe")
}

</script>

<template>
  <li class="list-group-item">
    <form @submit.prevent="addNewRecipe">
      <!-- General Information Start -->
      <div>
        <p class="my-3 fs-5 fw-semibold">General Information</p>
        <div>
          <!-- Image Start -->
          <div class="mb-3">
            <BaseInput type="file" identity="recipeImage" titleInput="Photo Recipe" @input="checkImage"/>
          </div>
          <!-- Image End -->

          <!-- Recipe Title Start -->
          <div class="mb-3">
            <BaseInput v-model="recipeData.name" type="text" identity="recipeTitle" placeholder="Give your recipe a title" titleInput="Photo Recipe" />
          </div>
          <!-- Recipe Title  End -->

          <!-- Recipe Description Start -->
          <div class="mb-3">
            <BaseTextArea v-model="recipeData.description" identity="recipeDescription" titleInput="description" placeholder="share story behind recipe and what is make it special" />
          </div>
          <!-- Recipe Description End -->

          <!-- Recipe Cateogry Start -->
          <div class="mb-3">
            <BaseSelect v-model="recipeData.category" :data="dataCategory" />
          </div>
          <!-- Recipe Category End -->
        </div>
      </div>
      <!-- General Information End -->

      <!-- Time Setting Start -->
      <div class="border-top py-1">
        <p class="my-3 fs-5 fw-semibold">Time Setting</p>
        <div>
          <!-- Preparation Time Start -->
          <div class="mb-3"> <BaseInput v-model="recipeData.prepTime" type="number" @keyup="countTotalTime" identity="prepTime" placeholder="0" titleInput="Prep Time" /> </div>
          <!-- Preparation Time End -->

          <!-- Cook Time Start -->
          <div class="mb-3"> <BaseInput v-model="recipeData.cookTime" type="number" @keyup="countTotalTime" identity="cookTime" placeholder="0" titleInput="Cook Time" /> </div>
          <!-- Cook Time End -->

          <!-- Total Time Start -->
          <div class="mb-3"> <BaseInput v-model="recipeData.totalTime" type="number" identity="totalTime" placeholder="0" titleInput="Total Time" disabled /> </div>
          <!-- Total Time End -->
        </div>
      </div>
      <!-- Time Setting End -->

      <!-- Ingredients Start -->
      <div class="border-top py-1">
        <p class="my-3 fs-5 fw-semibold">Ingredients</p>
        <p>
          Enter one ingredient per line. Include the quantity (i.e. cups,
          tablespoons) and any special preparation (i.e. sifted, softened,
          chopped). Use optional headers to organize the different parts of the
          recipe (i.e. Cake, Frosting, Dressing).
        </p>
        <div>
          <div class="mb-3 row" v-for="count in ingredientCount" :key="count">
            <!-- Ingredient Input Start -->
            <div class="col-lg-11 col-11"> <BaseInput v-model="recipeData.ingredients[count - 1]" type="text" identity="ingredient" placeholder="Ex: 1 cup sugar" /> </div>
            <!-- Ingredient Input End -->
            <div
              class="col-lg-1 col-1 hover:cursor-pointer col-form-titleInput align-self-end delete-ingredient"
              style="color: #cb3a31"
              v-if="ingredientCount > 1" @click="deleteIngredient(count - 1)"
            >
              <i class="fa-regular fa-trash-can px-1"></i
              ><span class="d-none d-md-inline">Delete</span>
            </div>
          </div>
        </div>
        <!-- Add More Button Start -->
        <BaseButton class="btn btn-primary" @click="addIngredient" type="button">Add More</BaseButton>
        <!-- Add More Button Start -->
      </div>
      <!-- Ingredients End -->

      <!-- Direction Start -->
      <div class="border-top my-3">
        <p class="my-3 fs-5 fw-semibold">Directions</p>
        <p>
          Explain how to make your recipe, including oven temperatures, baking
          or cooking times, and pan sizes, etc. Use optional headers to organize
          the different parts of the recipe
        </p>
        <div>
          <div class="mb-3 row" v-for="count in directionCount" :key="count">
            <!-- Direction Input Start -->
            <div class="col-lg-11 col-11"><BaseInput v-model="recipeData.directions[count - 1]" type="text" identity="direction" placeholder="Ex: 1 cup sugar" /></div>
            <!-- Direction Input End -->
            <div
              class="col-lg-1 col-1 hover:cursor-pointer col-form-titleInput align-self-end delete-ingredient"
              style="color: #cb3a31"
              v-if="directionCount > 1" @click="deleteDirection(count - 1)"
            >
              <i class="fa-regular fa-trash-can px-1"></i
              ><span class="d-none d-md-inline">Delete</span>
            </div>
          </div>
        </div>
        <!-- Add More Button Start -->

        <!-- Add More Button End -->
      </div>
      <!-- Direction End -->
      <BaseButton @click="addDirection" class="btn btn-primary"  type="button">Add More</BaseButton>
      <!-- Form Button Start -->
      <div class="border-top py-3 d-flex my-4 justify-content-end  gap-3">
        <!-- Cancel Button Start -->
        <BaseButton class="btn btn-danger"  type="button">Cancel</BaseButton>
        <!-- Cancel Button End -->

        <!-- Submit Button Start -->
        <BaseButton class="btn btn-primary"  type="submit">Submit</BaseButton>
        <!-- Submit Button End -->
      </div>
      <!-- Form Button End -->
    </form>
  </li>
</template>

<style scoped>

</style>