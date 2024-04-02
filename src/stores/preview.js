import { defineStore } from 'pinia'

export const usePreviewStore = defineStore('preview', {
  state: () => ({
    preview: false,
    theme: "background-color: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
    copiedAlert: false,
    downloadedAlert: false
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
      this.theme =  "background-color: " + newTheme
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
  } 
})
