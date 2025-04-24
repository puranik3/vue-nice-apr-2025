import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

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

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import VotingWidget from '@/components/common/VotingWidget.vue'

library.add(fas)

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

// global registration of utility components
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('voting-widget', VotingWidget)

// #3 - add vuetify plugin - Vuetify's components, directives are registered and ready for use
app.use(vuetify)

app.use(createPinia())
app.use(router)

app.mount('#app')
