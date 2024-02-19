import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { MotionPlugin } from '@vueuse/motion'

loadFonts()

const app = createApp(App)


app.use(vuetify)
app.use(MotionPlugin)

app.mount('#app')
