<script setup>

import BaseInput from '@/components/ui/BaseInput.vue'
import BaseTextArea from '@/components/ui/BaseTextArea.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
const dataCategory = ["Breakfast", "Lunch", "Dinner", "Meals", "Snacks"]
</script>

<template>
  <li class="list-group-item">
    <form>
      <!-- General Information Start -->
      <div>
        <p class="my-3 fs-5 fw-semibold">General Information</p>
        <div>
          <!-- Image Start -->
          <div class="mb-3">
            <BaseInput type="file" identity="recipeImage" titleInput="Photo Recipe" />
          </div>
          <!-- Image End -->

          <!-- Recipe Title Start -->
          <div class="mb-3">
            <BaseInput type="text" identity="recipeTitle" placeholder="Give your recipe a title" titleInput="Photo Recipe" />
          </div>
          <!-- Recipe Title  End -->

          <!-- Recipe Description Start -->
          <div class="mb-3">
            <BaseTextArea identity="recipeDescription" titleInput="description" placeholder="share story behind recipe and what is make it special" />
          </div>
          <!-- Recipe Description End -->

          <!-- Recipe Cateogry Start -->
          <div class="mb-3">
            <BaseSelect :data="dataCategory" />
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
          <div class="mb-3"> <BaseInput type="number" identity="prepTime" placeholder="0" titleInput="Prep Time" /> </div>
          <!-- Preparation Time End -->

          <!-- Cook Time Start -->
          <div class="mb-3"> <BaseInput type="number" identity="cookTime" placeholder="0" titleInput="Cook Time" /> </div>
          <!-- Cook Time End -->

          <!-- Total Time Start -->
          <div class="mb-3"> <BaseInput type="number" identity="totalTime" placeholder="0" titleInput="Total Time" /> </div>
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
          <div class="mb-3 row">
            <!-- Ingredient Input Start -->
            <div class="col-lg-11 col-11"> <BaseInput type="text" identity="ingredient" placeholder="Ex: 1 cup sugar" /> </div>
            <!-- Ingredient Input End -->
            <div
              class="col-lg-1 col-1 col-form-titleInput align-self-end delete-ingredient"
              style="color: #cb3a31"
            >
              <i class="fa-regular fa-trash-can px-1"></i
              ><span class="d-none d-md-inline">Delete</span>
            </div>
          </div>
        </div>
        <!-- Add More Button Start -->
        <BaseButton class="btn btn-primary"  type="button">Add More</BaseButton>
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
          <div class="mb-3 row">
            <!-- Direction Input Start -->
            <div class="col-lg-11 col-11"><BaseInput type="text" identity="direction" placeholder="Ex: 1 cup sugar" /></div>
            <!-- Direction Input End -->
            <div
              class="col-lg-1 col-1 col-form-titleInput align-self-end delete-ingredient"
              style="color: #cb3a31"
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
      <BaseButton class="btn btn-primary"  type="button">Add More</BaseButton>
      <!-- Form Button Start -->
      <div class="border-top py-3 d-flex my-4 justify-content-end  gap-3">
        <!-- Cancel Button Start -->
        <BaseButton class="btn btn-danger"  type="button">Cancel</BaseButton>
        <!-- Cancel Button End -->

        <!-- Submit Button Start -->
        <BaseButton class="btn btn-primary"  type="button">Submit</BaseButton>
        <!-- Submit Button End -->
      </div>
      <!-- Form Button End -->
    </form>
  </li>
</template>

<style scoped>

</style>