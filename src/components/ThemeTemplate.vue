<script setup>
const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
  themeCss: {
    type: String,
    required: true,
  },
});

function updateBody() {
  console.log(props);
  document.querySelector("body").style.backgroundImage = props.themeCss;
}
</script>

<template>
  <img @click="updateBody" class="templateImage" :src="props.theme" />
</template>

<style scoped>
.templateImage {
  width: 100%;
  height: 100%;
}
</style>
