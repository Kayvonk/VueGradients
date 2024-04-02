<script>
export default {
  data: () => ({
    c1: "#ff00ff",
    c2: "#00ff00",
  }),
};
</script>
<script setup>
import * as htmlToImage from "html-to-image";
import { usePreviewStore } from '@/stores/preview'
const store = usePreviewStore()

function getPng() {
  htmlToImage
    .toBlob(document.querySelector("body"))
    .then(function (blob) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "yay.png";
      a.click();
      store.endPreview()
      setTimeout(() => {
        store.handleDownloadedAlert()
      }, 1000);
    });
}

function copyURL() {
  try {
    navigator.clipboard.writeText(store.theme);
  } catch ($e) {
    alert('Cannot copy');
  }
}


</script>

<template>
  <main>
    <section id="homeContainer" @click.stop="store.endPreview()">
      <v-alert class="copiedAlert" :class="store.copiedAlert && 'show'" text="Coped to clipboard!"
        type="success"></v-alert>
      <v-alert class="downloadedAlert" :class="store.downloadedAlert && 'show'" text="Downloaded Image!"
        type="success"></v-alert>
      <div class="opagueBackground" :class="store.preview && 'hide'">
        <section id="gradientOptions">
          <div id="colorButtonsContainer">
            <button class="vueBtn" aria-label="Color-1">Color 1</button>
            <button class="vueBtn" aria-label="Color-2">Color 2</button>
            <button class="vueBtn" aria-label="Color-3">Color 3</button>
            <div id="gradientDirectionOptions">
              <button class="linearBtn" aria-label="Linear">Linear</button>
              <button class="radialBtn" aria-label="Radial">Radial</button>
            </div>
            
              <input class="radialInput" type="text"/>
          </div>
          <div class="d-flex justify-space-around">
            <v-color-picker v-model="c1" elevation="15"></v-color-picker>
          </div>
        </section>
        <div id="homeButtonsContainer">
          <button @click.stop="store.togglePreview()" class="vueRoundedBtn" aria-label="Preview">Preview</button>
          <button @click.stop="copyURL(); store.handleCopiedAlert()" class="vueRoundedBtn"
            aria-label="Code">Code</button>
          <button @click.stop="getPng(); store.togglePreview(); store.endCopiedAlert()" class="vueRoundedBtn"
            aria-label="Continue">Download</button>

        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
#gradientDirectionOptions {
display: flex;
width: 25vw;
}

.radialInput {
  width: 50px;
  border: none;
  padding: 10px;
  border-radius: 6pt;
}

.linearBtn {
  padding: 10px 8px;
  min-width: fit-content;
  border: 1px solid #777777;
  border-radius: 25pt 0 0 25pt;
  width: 12vw;
  box-shadow: 0px 2px 10px -5px rgba(99, 99, 99, 0.75);
}

.radialBtn {
  padding: 10px 8px;
  min-width: fit-content;
  border: 1px solid #777777;
  border-radius: 0 25pt 25pt 0;
  width: 12vw;
  box-shadow: 0px 2px 10px -5px rgba(99, 99, 99, 0.75);
}

.linearBtn:hover, .radialBtn:hover {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 10px 12px 10px -5px rgba(94, 94, 94, 0.75);

} 

#colorButtonsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  justify-content: space-around;
}

.copiedAlert,
.downloadedAlert {
  position: absolute;
  top: 8vh;
  display: none;
  animation: slideDown linear 1.8s forwards;
  transition: ease-in-out 0.25s;
}

@keyframes slideDown {
  0% {
    transform: translateY(-2vh);
    opacity: 0;
  }

  25% {
    transform: translateY(0vh);
    opacity: 1;
  }

  75% {
    transform: translateY(0vh);
    opacity: 1;
  }

  100% {
    transform: translateY(-2vh);
    opacity: 0;
  }
}

.show {
  display: flex;
}

#gradientOptions {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

#homeButtonsContainer {
  width: 50vw;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
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
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 75vw;
  height: 80vh;
  background-color: rgba(255, 255, 255, 0.445);
  border-radius: 13pt;
  padding-top: 40px;
}

.hide {
  display: none !important;
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
