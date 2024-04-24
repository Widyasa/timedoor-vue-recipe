<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const userData = computed(() => {
  return store.state.auth.userLogin
})
</script>

<template>
<div class="card">
  <div class="card-header bg-white">
    <h4 class="font-semibold">Personal Info</h4>
    <p class="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, maiores!
    </p>
  </div>
  <div class="card-body">
    <h6 class="font-semibold">
      My Basic Info
    </h6>
    <div class="flex flex-col mt-4">
      <div class="flex gap-5">
        <p class="font-semibold">First Name</p>
        <p>{{userData.firstName}}</p>
      </div>
      <div class="flex gap-5">
        <p class="font-semibold">Last Name</p>
        <p>{{userData.lastName}}</p>
      </div>
      <div class="flex gap-5">
        <p class="font-semibold">Username</p>
        <p>{{ userData.username }}</p>
      </div>
      <div class="flex gap-5">
        <p class="font-semibold">Email</p>
        <p>{{ userData.email }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>