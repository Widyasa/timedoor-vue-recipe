<script setup>

import SearchBar from '@/components/navigation/SearchBar.vue'
import SignupBtn from '@/components/navigation/SignupBtn.vue'
import ProfileMenu from '@/components/navigation/ProfileMenu.vue'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

const menuComponent = ref("signUpBtn")
const store = useStore()
const components = {  
  'SignUpBtn' : SignupBtn,
  'ProfileMenu' : ProfileMenu
}
const getToken = computed(() => {
  return store.state.auth.token
})
if (getToken.value) {
  menuComponent.value = "SignUpBtn";
} else {
  menuComponent.value = "ProfileMenu"
}
watch(getToken, (newValue, oldValue) => {
  if (!newValue) {
    menuComponent.value = "signUpBtn"
  } else {
    menuComponent.value = "ProfileMenu"
  }
})
</script>

<template>
<nav class="flex justify-between py-4 w-full container">
  <div class="flex gap-3 items-center font-semibold">
      <img src="@/assets/logo.svg" alt="Logo Brand" class="w-8 h-8">
    Recipee
  </div>
  <div class="flex gap-3">
   <SearchBar />
    <Component :is="components[menuComponent]" />
  </div>
</nav>
</template>

<style scoped>

</style>