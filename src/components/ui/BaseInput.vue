<script setup>
defineProps({
  titleInput : {type:String, require : true},
  type : {type:String, require : true},
  label : {type:String, require : true},
  identity : {type:String, require : true},
  placeholder : {type:String, require : false},
  readonly : {type:String, require : true, default : '0'},
  isImage : {type:Boolean, require : true, default : false},
  modelValue : {type: [String, Number]}
})
</script>

<template>
<div class="">
  <label :for="identity" class="font-semibold">
    {{titleInput}} <span class="text-red-600">*</span>
    <slot></slot>
  </label>
  <input
    :class="[{'d-none' : isImage}, 'form-control']"
    class="bg-transparent py-2 pl-4 pr-2 rounded border w-full border-black"
    :type="type"
    :id="identity"
    :placeholder="placeholder"
    :value="modelValue"
    :readonly="readonly === '1'"
    @input="$emit('update:modelValue', $event.target.value)"
    @keyup = "$emit('keyInput', $event.target.value)"
  >
</div>
</template>

<style scoped>

</style>