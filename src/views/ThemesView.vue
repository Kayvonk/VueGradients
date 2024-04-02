<script setup>
import ThemeTemplate from "../components/ThemeTemplate.vue"
import { usePreviewStore } from '@/stores/preview'
const store = usePreviewStore()
</script>

<script>
// 035 Itmeo Branding
import image1 from "../assets/bg/image1.png"
const imageCss1 = "linear-gradient(180deg, #2af598 0%, #009efd 100%)"
// 061 Sweet Period
import image2 from "../assets/bg/image2.png"
const imageCss2 = "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)"
// 073 Love Kiss
import image3 from "../assets/bg/image3.png"
const imageCss3 = "linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
// 085 October Silence
import image4 from "../assets/bg/image4.png"
const imageCss4 = "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)"
// 147 Smart Indigo
import image5 from "../assets/bg/image5.png"
const imageCss5 = "linear-gradient(to top, #b224ef 0%, #7579ff 100%)"
// 128 Plum Bath
import image6 from "../assets/bg/image6.png"
const imageCss6 = "linear-gradient(to top, #cc208e 0%, #6713d2 100%)"
// 088 Over Sun
import image7 from "../assets/bg/image7.png"
const imageCss7 = "linear-gradient(60deg, #abecd6 0%, #fbed96 100%)"
// 102 Happy Memories
import image8 from "../assets/bg/image8.png"
const imageCss8 = "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)"
// 055 Sharp Blues
import image9 from "../assets/bg/image9.png"
const imageCss9 = "linear-gradient(to top, #00c6fb 0%, #005bea 100%)"




export default {
  data() {
    return {
      images: [{ image: image1, imageCss: imageCss1 }, { image: image2, imageCss: imageCss2 }, { image: image3, imageCss: imageCss3 }, { image: image4, imageCss: imageCss4 }, { image: image5, imageCss: imageCss5 }, { image: image6, imageCss: imageCss6 }, { image: image7, imageCss: imageCss7 }, { image: image8, imageCss: imageCss8 }, { image: image9, imageCss: imageCss9 }]
    };
  }
};

</script>

<template>
  <section id="themesContainer" @click.stop="store.endPreview()">
    <div class="opagueBackground" :class="store.preview && 'hide'">
      <div id="templateContainer">

        <div class="template" v-for="(element, index) in images">

          <ThemeTemplate :theme="element.image" :themeCss='element.imageCss' @click="greet"></ThemeTemplate>

        </div>

      </div>
      <div id="themeButtonsContainer">
        <button @click.stop="store.togglePreview()" class="vueRoundedBtn" aria-label="Preview">Preview</button>
        <button class="vueRoundedBtn" aria-label="Continue">Download</button>
        <!-- <v-hover v-slot="{ hover }">
             <v-btn :style="{'background-color': hover ? 'yellow' : 'blue' }" class="vueBtn" aria-label="Preview" size ="large" rounded elevation="16"> Preview </v-btn>
        </v-hover>
        <v-btn class="vueBtn" aria-label="Continue" size="large" rounded="xl" elevation="16"> Continue </v-btn> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
#themeButtonsContainer {
  width: 50vw;
  margin: auto;
  display: flex;
  justify-content: space-around;
}

#templateContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;
  height: auto;
  margin-top: 4vh;
  max-height: 50vh;
}

#themesContainer {
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
}

.hide {
  display: none;
}

.template {
  max-width: 200px;
  max-height: 150px;
  width: 33%;
  height: 33%;
  padding: 10px;
}

.template:hover {
  box-shadow: inset 10px 10px 50px 20px rgba(255, 255, 255, 0.656);
  border: 1px solid rgb(255, 255, 255);
}
</style>
