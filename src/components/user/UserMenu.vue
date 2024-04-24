<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const emit = defineEmits(['changeComponent'])
const menuClicked = (option) => {
  emit("changeComponent", option)
}
const store = useStore()
const userData = computed(() => {
  return store.state.auth.userLogin
})
</script>

<template>
<ul class="card col-lg-3 py-3 gap-3">
  <li class=" items-center gap-3 user-menu flex hover:cursor-pointer w-full border-bottom py-2">
    <img :src="userData.imageLink" alt="tes image" class="rounded-full w-10 h-10">
    <div class="">
      <h6 class="fs-6 font-semibold">{{userData.firstName}} {{userData.lastName}}</h6>
      <p class="text-sm">{{userData.email}}</p>
    </div>
  </li>
  
  <li class="list-group-item user-menu hover:cursor-pointer w-full border-bottom py-2"
      @click="menuClicked( 'personal-info') ">
    <i class="fa-solid fa-user pe-2"></i>Personal Info
  </li>
  <li class="list-group-item user-menu hover:cursor-pointer w-full border-b border-b-black py-2 border-bottom"
  @click="menuClicked('favorite-recipe') ">
  <i class="fas fa-heart pe-2"></i>Favorited Recipes
  </li>
  <li class="list-group-item user-menu hover:cursor-pointer w-full border-b border-b-black py-2 border-bottom rounded-0"
  @click="menuClicked( 'user-recipe') ">
  <i class="fa-solid fa-burger pe-2"></i>My Recipe
  </li>
</ul>
</template>

<style scoped>

</style>