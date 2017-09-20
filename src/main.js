import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'
import Vuetify from 'vuetify'
import App from './App'

Vue.use(vueSmoothScroll)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
