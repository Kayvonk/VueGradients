<template>
  <div id="aboutContainer">
    <div class="opagueBackground">
      <div id="aboutTextContainer">
        <p>
          The VueGradients app provides users sample CSS gradients as well as a
          gradient generator.
        </p>

        <p>
          Gradients can be copied to your clipboard as CSS or downloaded as a
          PNG.
        </p>

        <p>Sample gradients are provided by https://webgradients.com/</p>

        <p>Thanks for using the app!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#aboutContainer {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.opagueBackground {
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: 75vw;
  height: 80vh;
  background-color: rgba(255, 255, 255, 0.445);
  border-radius: 13pt;
  padding: 15vh 30px 30px 30px;
}


#aboutTextContainer {
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16pt;
  color: black;
}

@media screen and (max-width: 768px) {
  #aboutTextContainer {
  font-size: 14pt;
}
}

@media screen and (max-width: 420px) {
  #aboutTextContainer {
    font-size: 11pt;
}
}
</style>
