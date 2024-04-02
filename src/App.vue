<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePreviewStore } from '@/stores/preview'
const store = usePreviewStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav :class="store.preview && 'hide'">
        <div id="navLinksContainer">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/themes">Themes</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
#navLinksContainer {
  width: 50vw;
  display: flex;
  justify-content: space-between;
}

#navLinksContainer * {
  text-decoration: none;
}

#navLinksContainer *:hover {
  color: white
}

header {
  line-height: 1.5;
  min-height: 10vh;
}
</style>
