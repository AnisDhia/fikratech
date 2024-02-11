// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// Icons
import { mdi } from 'vuetify/iconsets/mdi'
import { customIcons } from '@/components/icons/icons'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    icons: {
      defaultSet: 'mdi',
      sets: {
        mdi,
        custom: customIcons
      }
    }
  }
)
