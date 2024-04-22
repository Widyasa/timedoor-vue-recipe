<script setup>

</script>

<template>
  <footer class="py-5" style="background-color: #f5f5f5">
    <div class="container-md">
      <div class="row">
        <div class="col-md-3 col-sm-5 col-12">
          <img src="@/assets/logo.svg" alt="Logo" class="w-10 h-10"/>
          <p class="py-4 mb-1 fw-semibold fs-4">Follow us on</p>
          <div class="fs-3 pb-4" style="color: #4c4ddc">
            <i class="fa-brands fa-facebook pe-3"></i>
            <i class="fa-brands fa-twitter pe-3"></i>
            <i class="fa-brands fa-square-instagram pe-3"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
          <p class="d-none d-sm-block">ⓒ2022 Tasty Recipe, Inc</p>
        </div>
        <div class="col-md-5 col-sm-1 col-12"></div>
        <div class="col-md-4 col-sm-6 col-12">
          <p class="fw-semibold fs-5 mb-3">Get Tasty Recipe News Later</p>
          <p class="mb-1">Email Address <span class="text-danger">*</span></p>
          <input
            type="text"
            class="form-control"
            placeholder="Your email address"
          />
          <RouterLink :to="{name:'signup'}" type="button" class="btn btn-signup rounded-pill mt-4">
            Sign Up
          </RouterLink>
        </div>
        <p class="d-block d-sm-none pt-5 mb-0">ⓒ2022 Tasty Recipe, Inc</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>