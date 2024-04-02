import { defineStore } from 'pinia'

export const usePreviewStore = defineStore('preview', {
  state: () => ({
    preview: false,
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
  } 
})
