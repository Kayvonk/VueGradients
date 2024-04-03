import { defineStore } from 'pinia'

export const usePreviewStore = defineStore('preview', {
  state: () => ({
    preview: false,
    theme: "background-color: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
    copiedAlert: false,
    downloadedAlert: false,

    pickerColor: "#ff00ff",
    color1: null,
    color2: null,
    color3: null,
    mode: 'rgba',
    modes: ['rgb', 'rgba', 'hsl', 'hsla', 'hex', 'hexa'],
    linearSelected: true,
    radialSelected: false,
    linearValue: "90"

  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    endPreview() {
      this.preview = false
      console.log(this.preview);
    },
    togglePreview() {
      this.preview = !this.preview
      console.log(this.preview);
    },
    handleTheme(newTheme) {
      this.theme = "background-color: " + newTheme
      console.log("newTheme:", newTheme);
    },
    handleCopiedAlert() {
      this.copiedAlert = true
      setTimeout(() => {
        this.copiedAlert = false
      }, 2000)
    },
    endCopiedAlert() {
      this.copiedAlert = false
    },
    handleDownloadedAlert() {
      this.downloadedAlert = true
      setTimeout(() => {
        this.downloadedAlert = false
      }, 2000)
    },
    updateMode(value) {
      this.mode = value
    },
    getColors() {
      console.log(this.color1, this.color2, this.color3);
    },
    updateColor1() {
      this.color1 = this.pickerColor
      document.getElementById("colorDisplay1").style.backgroundColor = this.pickerColor
      this.generateGradientCss(this.color1, this.color2, this.color3)

    },
    updateColor2() {
      this.color2 = this.pickerColor
      document.getElementById("colorDisplay2").style.backgroundColor = this.pickerColor
      this.generateGradientCss(this.color1, this.color2, this.color3)

    },
    updateColor3() {
      this.color3 = this.pickerColor
      document.getElementById("colorDisplay3").style.backgroundColor = this.pickerColor
      this.generateGradientCss(this.color1, this.color2, this.color3)

    },
    selectLinear() {
      this.linearSelected = true;
      this.radialSelected = false;
    },
    selectRadial() {
      this.radialSelected = true;
      this.linearSelected = false;
    },

    generateGradientCss(...colors) {

      let selectedColors = colors.filter(color => color !== null)

      if (selectedColors.length === 1) {
        document.querySelector("body").style.backgroundColor = selectedColors[0];
        setTimeout(() => {
          document.querySelector("body").style.backgroundImage = "none";
        }, 200);

      }
      else if (selectedColors.length === 2) {
        let selectedColors = colors.filter(color => color !== null)
        console.log("selectedColors", selectedColors);
        if (this.linearSelected) {
          let template = "linear-gradient(" + this.linearValue + "deg, " + selectedColors[0] + " 0%, " + selectedColors[1] + " 100%)"
          document.querySelector("body").style.background = template
        }
        else {
          let template = "radial-gradient(circle, " + selectedColors[0] + " 0%, " + selectedColors[1] + " 100%)"
          document.querySelector("body").style.background = template;
        }
      }
      else if (selectedColors.length === 3) {
        
        let selectedColors = colors.filter(color => color !== null)
        console.log("selectedColors", selectedColors);
        if (this.linearSelected) {
          let template = "linear-gradient(" + this.linearValue + "deg, " + selectedColors[0] + " 0%, " + selectedColors[1] + " 50%, " + selectedColors[2] + " 100%)"

          document.querySelector("body").style.background = template
        }
        else {
          let template = "radial-gradient(circle, " + selectedColors[0] + " 0%, " + selectedColors[1] + " 50%, " + selectedColors[2] + " 100%)"

          document.querySelector("body").style.background = template;
        }



      }

      this.theme = "background-color: " + selectedColors[0]
    },
    updateTheme() {
      console.log('====================================');
      console.log("FUCk");
      console.log('====================================');
    }
  }
})
