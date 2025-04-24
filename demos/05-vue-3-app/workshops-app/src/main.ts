import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// #1: Vuetify imports
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'

// run the file
import './services/configureAxios'

// #2 - configure vuetify "plugin"
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.blue.darken1,
          secondary: colors.green.lighten4,
          danger: colors.red.lighten1,
        },
      },
    },
  },
})

const app = createApp(App)

// #3 - add vuetify plugin - Vuetify's components, directives are registered and ready for use
app.use(vuetify)

app.use(createPinia())
app.use(router)

app.mount('#app')
