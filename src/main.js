import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$globalURL = 'https://helios-request-bin.herokuapp.com/wy9u4dwy';

new Vue({
  render: h => h(App)
}).$mount('#app')
