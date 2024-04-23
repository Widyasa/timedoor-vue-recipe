<script setup>

import BaseInput from '@/components/ui/BaseInput.vue'
import { reactive, ref } from 'vue'
import { store } from '@/stores/index.js'
import router from '@/router/index.js'
import { createRouter as $router } from 'vue-router/dist/vue-router.esm-browser.js'
const signUpData = reactive({
  firstName : "",
  lastName : "",
  username : "",
  email : "",
  password : "",
  confirmPassword: "",
  isLogin: false,
  imageLink: ""
})
const passwordStatusDisplay = ref("none")
const confirmPasswordFailed = ref("none")
const confirmPasswordSuccess = ref("none")
const passwordCheck = () => {
  if (signUpData.password.length < 8) {
    passwordStatusDisplay.value = "block"
  } else {
    passwordStatusDisplay.value = "none"
  }
}
const confirmationPasswordCheck = () => {
  if (signUpData.confirmPassword === "") {
    confirmPasswordSuccess.value = "none"
    confirmPasswordFailed.value = "none"
    return
  }
  if (signUpData.password !== signUpData.confirmPassword) {
    confirmPasswordSuccess.value = "none"
    confirmPasswordFailed.value = "block"
    return
  }
  confirmPasswordSuccess.value = "block"
  confirmPasswordFailed.value = "none"
}
const checkImage = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)

  reader.addEventListener("load", () => {
    signUpData.imageLink = reader.result
  })
}
if (signUpData.imageLink === "") {
  signUpData.imageLink = "https://cdn-icons-png.freepik.com/256/10302/10302971.png?semt=ais_hybrid"
}
const register = async () => {
  if (
    signUpData.password !== signUpData.confirmPassword || signUpData.password < 8
  ) {
    signUpData.confirmPassword = ""
    signUpData.password = ""
    confirmPasswordFailed.value = "none"
    confirmPasswordSuccess.value = "none"
  } else {
    await store.dispatch("auth/getRegisterData", signUpData)
    await router.push("/login")
  }
}
</script>

<template>
    <div class="px-[6rem] py-5 min-h-screen" style="background-color: #f5f5f5">
      <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
        <div class="text-center flex flex-col items-center">
          <img src="@/assets/logo.svg" alt="Logo" class="w-10 h-10"/>
          <h2 class="mt-4">Create your account</h2>
          <p>Enter your details to use all the app features.</p>
        </div>
        <form class="mt-3" @submit.prevent="register">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-6">
              <base-input type="text" title-input="First Name" id="firstName" placeholder="masukkan first name" v-model="signUpData.firstName" :readonly="0"/>
            </div>
            <div class="col-span-6">
              <base-input type="text" title-input="Last Name" id="lastName" placeholder="masukkan last name" v-model="signUpData.lastName"/>
            </div>
          </div>
          <div class="my-4">
            <base-input type="text" title-input="Username" id="username" placeholder="masukkan username" v-model="signUpData.username"/>
          </div>
          <div class="my-4">
            <base-input type="email" title-input="Email" id="email" placeholder="masukkan email" v-model="signUpData.email"/>
          </div>
          <div class="my-4">
            <base-input v-model="signUpData.password" @keyInput="passwordCheck" type="password" title-input="Password" id="password" placeholder="masukkan password"/>
            <p class="text-danger mt-1 font-medium text-sm" :style="{display: passwordStatusDisplay}">
              The Password field must be at least 8 character
            </p>
          </div>
          <div class="my-4">
            <base-input type="password" title-input="Confirm Password" id="passwordConfirm" placeholder="masukkan confirm password" v-model="signUpData.confirmPassword" @keyInput="confirmationPasswordCheck"/>
            <p class="text-danger mt-1 font-medium text-sm" :style="{display: confirmPasswordFailed}">
              The Password confirmation does not match
            </p>
            <p class="text-success mt-1 font-medium text-sm" :style="{display: confirmPasswordSuccess}">
              The Password confirmation does match
            </p>
          </div>
          <div class="my-4">
            <base-input @input="checkImage" type="file" title-input="Profile Image" identity="recipeImage" label="profile photo" isImage="true">
              <div class="">
                <div class="border p-1 mt-2 rounded-full">
                  <img :src="signUpData.imageLink" class="w-[100px] h-[100px] rounded-full object-cover" alt="">
                </div>
                <div class="text-center -translate-y-[24px]">
                  <i class="fa-solid fa-camera fs-5 p-2 rounded-full bg-white"></i>
                </div>
              </div>
            </base-input>
          </div>
          <button type="submit" class="btn btn-primary w-full py-3">Submit</button>
        </form>
        <div class="text-center mt-4">
          <p class="fw-semibold">
            Already have account?<span style="color: #4c4ddc"
          ><router-link to="/login" class="text-decoration-none"> Login</router-link></span
          >
          </p>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>