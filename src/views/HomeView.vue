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
          <v-btn> Color 1 </v-btn>
          <v-btn> Color 2 </v-btn>
          <v-btn> Color 3 </v-btn>
        </div>
        <v-icon id="eyedropperIcon" icon="mdi-eyedropper"></v-icon>
        <div class="d-flex justify-space-around">
          <v-color-picker v-model="c1" elevation="15"></v-color-picker>
          <!-- <v-icon id="eyedropperIcon" icon="mdi-eyedropper" theme="dark"></v-icon> -->
          <!-- <v-color-picker v-model="c2" hide-inputs></v-color-picker> -->
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
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

/* #eyedropperIcon{
  border: 2px black solid;
} */

/* .opagueBackground * {
  background-color: transparent  ;
} */

/* @media (min-width: 1024px) {
  .about {
  }
} */

/* .v-color-picker__controls{
  background: transparent;
} */
</style>
