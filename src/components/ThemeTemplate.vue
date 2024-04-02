<script setup>
defineProps({
  theme: {
    type: String,
    required: true
  }
})
</script>

<template>

<img class="templateImage" :src="theme">

</template>

<style scoped>
.templateImage{
  width: 100%;
  height: 100%;
}
</style>
