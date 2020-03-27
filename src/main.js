import Vue from 'vue'
import App from './App.vue'
import VueScrollAnimate from './plugins/scroll-animate'
import 'animate.css'
Vue.config.productionTip = false

Vue.use(VueScrollAnimate)

new Vue({
  render: h => h(App),
}).$mount('#app')
