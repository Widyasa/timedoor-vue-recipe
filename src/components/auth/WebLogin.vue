<script setup>

</script>

<template>
  <div class="container-fluid py-5 h-screen" style="background-color: #f5f5f5;">
    <div style="background-color: #ffffff; width: 400px;" class="p-5 m-auto">
      <div class="text-center flex flex-col items-center">
        <img src="@/assets/logo.svg" alt="Logo" class="w-10 h-10"/>
        <h2 class="mt-4">Log in to your account</h2>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <form>
        <div class="my-4"><!-- Email --></div>
        <div class="my-4"><!-- Password --></div>
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