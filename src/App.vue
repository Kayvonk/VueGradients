<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePreviewStore } from '@/stores/preview'
const store = usePreviewStore()
</script>

<template>
  <header @click.stop="store.endPreview()">
    <div class="wrapper">
      <nav :class="store.preview && 'hide'">
        <div id="navLinksContainer">
          <RouterLink class="routerLink" to="/">Home</RouterLink>
          <RouterLink class="routerLink" to="/about">About</RouterLink>
          <RouterLink class="routerLink" to="/themes">Themes</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

.routerLink {
  font-size: medium;
  font-weight: 600;
  text-decoration: none;
  text-shadow: 2px 1px 3px #ffffff;

}

.routerLink:hover {
  text-shadow: 4px 6px 12px #ffffff;
  color: white
}

#navLinksContainer {
  width: 50vw;
  display: flex;
  justify-content: space-between;
}

/* #navLinksContainer * {
 
}

#navLinksContainer *:hover {

} */

header {
  line-height: 1.5;
  min-height: 10vh;
}
</style>
