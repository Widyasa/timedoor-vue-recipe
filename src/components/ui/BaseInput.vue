<script setup>
defineProps({
  titleInput : {type:String, require : true},
  type : {type:String, require : true},
  label : {type:String, require : true},
  identity : {type:String, require : true},
  placeholder : {type:String, require : false},
  readonly : {type:String, require : true, default : '0'},
})
</script>

<template>
<div class="">
  <label :for="identity" class="font-semibold">
    {{titleInput}} <span class="text-red-600">*</span>
  </label>
  <input class="bg-transparent py-2 pl-4 pr-2 rounded border w-full border-black" :type="type" :id="identity" :placeholder="placeholder" :value="modelValue" :readonly="readonly === '1'">
</div>
</template>

<style scoped>

</style>