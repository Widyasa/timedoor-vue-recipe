<script setup>
import { reactive } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import { store } from '@/stores/index.js'
import router from '@/router/index.js'

const loginData = reactive( {
  email : "",
  password : "",
  isLogin: true
})
const login = async () => {
  await store.dispatch("auth/getLoginData", loginData)
  await router.push("/")
}

</script>

<template>
  <div class="container-fluid py-5 h-screen" style="background-color: #f5f5f5;">
    <div style="background-color: #ffffff; width: 400px;" class="p-5 m-auto">
      <div class="text-center flex flex-col items-center">
        <img src="@/assets/logo.svg" alt="Logo" class="w-10 h-10"/>
        <h2 class="mt-4">Log in to your account</h2>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <form @submit.prevent="login">
        <div class="my-4">
          <base-input type="email" title-input="Email" id="email" placeholder="masukkan email" v-model="loginData.email"/>
        </div>
        <div class="my-4">
          <base-input v-model="loginData.password" type="password" title-input="Password" id="password" placeholder="masukkan password"/>
        </div>
        <button class="btn btn-primary py-3 w-full" type="submit">Submit</button>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Don’t have an account?<span style="color: #4c4ddc">
            <router-link to="/signup" class="text-decoration-none">
              Signup</router-link
            ></span
        >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>