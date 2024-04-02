import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')


// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
