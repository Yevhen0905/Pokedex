import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VModal from 'vue-js-modal';

require("@/assets/style/style.scss");

Vue.config.productionTip = false

Vue.use(VModal)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
