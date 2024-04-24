<script setup>

import UserMenu from '@/components/user/UserMenu.vue'
import PersonalInfo from '@/components/user/PersonalInfo.vue'
import FavRecipe from '@/components/user/FavRecipe.vue'
import UserRecipe from '@/components/user/UserRecipe.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const component = {
  "personal-info": PersonalInfo,
  "favorite-recipe" : FavRecipe,
  "user-recipe" : UserRecipe
}
const getRoute = computed(() => {
  return route.params.component
})

</script>

<template>
<div class="container-md my-5 py-5">
  <div class="row">
    <UserMenu @change-component="$router.push($event)"/>
    <div class="col-lg-9">
      <component :is="component[getRoute]"></component>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>