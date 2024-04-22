<script setup>

import BaseInput from '@/components/ui/BaseInput.vue'
</script>

<template>
    <div class="px-[6rem] py-5 h-screen" style="background-color: #f5f5f5">
      <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
        <div class="text-center flex flex-col items-center">
          <img src="@/assets/logo.svg" alt="Logo" class="w-10 h-10"/>
          <h2 class="mt-4">Create your account</h2>
          <p>Enter your details to use all the app features.</p>
        </div>
        <form class="mt-3">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-6">
              <base-input type="text" title-input="First Name" id="firstName" placeholder="masukkan first name" value="value" :readonly="0"/>
            </div>
            <div class="col-span-6">
              <base-input type="text" title-input="Last Name" id="lastName" placeholder="masukkan last name" value="value"/>
            </div>
          </div>
          <div class="my-4">
            <base-input type="text" title-input="Username" id="username" placeholder="masukkan username" value="value"/>
          </div>
          <div class="my-4">
            <base-input type="email" title-input="Email" id="email" placeholder="masukkan email" value="value"/>
          </div>
          <div class="my-4">
            <base-input type="password" title-input="Password" id="password" placeholder="masukkan password" value="value"/>
          </div>
          <div class="my-4">
            <base-input type="password" title-input="Confirm Password" id="passwordConfirm" placeholder="masukkan confirm password" value="value"/>
          </div>
          <div class="my-4">
            <base-input type="file" title-input="Profile Image" identity="recipeImage" label="profile photo" isImage="true">
              <div class="">
                <div class="border p-1 mt-2 rounded-full">
                  <img src="https://cdn-icons-png.freepik.com/256/10302/10302971.png?semt=ais_hybrid" class="w-[100px] h-[100px] rounded-full object-cover" alt="">
                </div>
                <div class="text-center -translate-y-[24px]">
                  <i class="fa-solid fa-camera fs-5 p-2 rounded-full bg-white"></i>
                </div>
              </div>
            </base-input>
          </div>
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