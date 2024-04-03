<script setup>
import * as htmlToImage from "html-to-image";
import { usePreviewStore } from "@/stores/preview";
const store = usePreviewStore();

function getPng() {
  htmlToImage.toBlob(document.querySelector("body")).then(function (blob) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "yay.png";
    a.click();
    store.endPreview();
    setTimeout(() => {
      store.handleDownloadedAlert();
    }, 1000);
  });
}


</script>

<template>
  <main>
    <section id="homeContainer" @click.stop="store.endPreview()">
      <v-alert class="copiedAlert" :class="store.copiedAlert && 'show'" text="Copied to clipboard!"
        type="success"></v-alert>
      <v-alert class="downloadedAlert" :class="store.downloadedAlert && 'show'" text="Download Complete"
        type="success"></v-alert>
      <div class="opagueBackground" :class="store.preview && 'hide'">
        <section id="gradientOptions">
          <div id="colorButtonsContainer">
            <div class="colorButtonsRow">
              <button id="colorButton1" @click.stop="store.updateColor1()" class="vueBtn" aria-label="Color-1">
                Color 1
              </button>
              <div id="colorDisplay1" class="colorDisplay"></div>
            </div>
            <div class="colorButtonsRow">
              <button id="colorButton2" @click.stop="store.updateColor2()" class="vueBtn" aria-label="Color-2">
                Color 2
              </button>
              <div id="colorDisplay2" class="colorDisplay"></div>
            </div>
            <div class="colorButtonsRow">
              <button id="colorButton3" @click.stop="store.updateColor3()" class="vueBtn" aria-label="Color-3">
                Color 3
              </button>
              <div id="colorDisplay3" class="colorDisplay"></div>
            </div>
            <div id="gradientDirectionOptions">
              <button @click.stop="store.selectLinear()" class="linearBtn" aria-label="Linear">
                Linear
              </button>
              <button @click.stop="store.selectRadial()" class="radialBtn" aria-label="Radial">
                Radial
              </button>
            </div>
            <span id="linearInputSpan" :class="store.radialSelected && 'hide'">
              <input @change="store.handleLinearInputChange($event)" class="linearInput"
                :class="store.radialSelected && 'hide'" type="text" maxLength="3" defaultValue="90" />
            </span>
            <span :class="store.linearSelected && 'hide'">
              <div :class="store.linearSelected && 'hide'" id="linearInputPlaceholder"></div>
            </span>
          </div>
          <div class="colorPickerContainer">
            <v-color-picker theme="light" v-model="store.pickerColor" v-model:mode="store.mode"
              elevation="15"></v-color-picker>
          </div>
        </section>
        <div id="homeButtonsContainer">
          <button @click.stop="store.togglePreview()" class="vueRoundedBtn" aria-label="Preview">
            Preview
          </button>
          <button @click.stop="
      store.copyURL();
    store.handleCopiedAlert();
    " class="vueRoundedBtn" aria-label="Code">
            Code
          </button>
          <button @click.stop="
      getPng();
    store.togglePreview();
    store.endCopiedAlert();
    " class="vueRoundedBtn" aria-label="Continue">
            Download
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.colorPickerContainer {
  margin-top: auto;
  margin-bottom: auto;
}

.colorDisplay {
  min-width: 40px;
  border-radius: 3pt;
}

#linearInputSpan::after {
  content: "°";
  margin-left: 10px;
  font-size: 16pt;
}

.colorDisplay {
  height: auto;
  width: 5vw;
  background-color: aliceblue;
}

.colorButtonsRow {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

#colorTypeButtonsContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

#gradientDirectionOptions {
  display: flex;
  width: 25vw;
  margin-left: auto;
  margin-right: auto;
}

.linearInput {
  width: 50px;
  border: none;
  padding: 10px;
  border-radius: 6pt;
  height: 42px;
}

#linearInputPlaceholder {
  width: 50px;
  height: 42px;
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

.linearBtn:hover,
.radialBtn:hover {
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

@media screen and (max-width: 768px) {
  #gradientOptions {
    flex-direction: column-reverse;
    align-items: center;
  }

  .opagueBackground {
    width: 90vw;
    height: auto;
    padding: 35px 0;
  }

  #homeContainer {
    height: auto;
    margin: 35px 0;
  }

}

@media screen and (max-width: 480px) {
  #homeButtonsContainer {
    flex-direction: column;
    align-items: center;
    height: 20vh
  }

  .v-color-picker * {
    width: 100px !important;
  }
}
</style>
