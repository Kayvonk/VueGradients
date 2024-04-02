<script setup>
import ThemeTemplate from "../components/ThemeTemplate.vue"
</script>

<script>
import image1 from "../assets/BlurredBackgrounds/dark-purple-blurred-background.jpg"
import image2 from "../assets/BlurredBackgrounds/blue-blurred-background.jpg"
import image3 from "../assets/BlurredBackgrounds/green-blurred-background.jpg"
import image4 from "../assets/BlurredBackgrounds/golden-red-blurred-background.jpg"
import image5 from "../assets/BlurredBackgrounds/light-green-blurred-background.jpg"
import image6 from "../assets/BlurredBackgrounds/light-peach-blurred-background.jpg"
import image7 from "../assets/BlurredBackgrounds/light-purple-pink-blurred-background.jpg"
import image8 from "../assets/BlurredBackgrounds/orange-red-blurred-background.jpg"
import image9 from "../assets/BlurredBackgrounds/peach-blurred-background.jpg"

export default {
  data() {
    return {
      images: [image1, image2, image3, image4, image5, image6, image7, image8, image9,]
    };
  }
};            
</script>

<template>
  <section id="themesContainer">
    <div class="opagueBackground">
<div id="templateContainer">

  <div class="template" v-for="(image, imageIndex) in images">
    
    <ThemeTemplate :theme="image"></ThemeTemplate>
    
  </div>
  
</div>
    </div>
  </section>
</template>

<style scoped>
#templateContainer {
  display: flex;
  justify-content: center;
  /* align-items: center; */
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
  /* padding-top: 2vh; */
}

.template {
  max-width: 200px;
  max-height: 150px;
width: 33%;
height: 33%;
padding: 10px;
}

</style>
