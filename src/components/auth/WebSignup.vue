<script setup>

import BaseInput from '@/components/ui/BaseInput.vue'
</script>

<template>
    <div class="px-[6rem] py-5 h-screen" style="background-color: #f5f5f5">
      <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
        <div class="text-center">
          <img src="../../assets/images/Vector.png" alt="Logo" />
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