<script>
export default {
  data: () => ({
    c1: "#ff00ff",
    c2: "#00ff00",
  }),
};
</script>

<template>
  <main>
    <section id="homeContainer">
      <div class="opagueBackground">
        <div id="colorButtonsContainer">
          <button class="vueBtn" aria-label="Color-1">Color 1</button>
          <button class="vueBtn" aria-label="Color-2">Color 2</button>
          <button class="vueBtn" aria-label="Color-3">Color 3</button>
        </div>
        <v-icon id="eyedropperIcon" icon="mdi-eyedropper"></v-icon>
        <div class="d-flex justify-space-around">
          <v-color-picker v-model="c1" elevation="15"></v-color-picker>
        </div>
        <div id="homeButtonsContainer">
          <button class="vueRoundedBtn" aria-label="Preview">Preview</button>
          <button class="vueRoundedBtn" aria-label="Continue">Button</button>

        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
#homeButtonsContainer {
  width: 50vw;
  display: flex;
  justify-content: space-around;
}

#homeContainer {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.opagueBackground {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75vw;
  height: 80vh;
  background-color: rgba(255, 255, 255, 0.445);
  border-radius: 13pt;
}

.v-color-picker-preview__eye-dropper {
  border: 1px solid black;
  border-radius: 50%;
}

.v-color-picker {
  background-color: transparent;
}

/* .v-color-picker__controls{
  background: transparent;
} */
</style>
