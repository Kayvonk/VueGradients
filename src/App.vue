<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
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

@media (min-width: 1024px) {
  header {
    display: flex;
  }

}
</style>
