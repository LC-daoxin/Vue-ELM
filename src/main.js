// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper' /* 轮播图插件 */
import '@styles/reset.css'
import '@styles/border.css'
import fastClick from 'fastclick'
import '@styles/iconfont.css'
import 'swiper/dist/css/swiper.css' /* 轮播图插件样式 */

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper) /* 轮播图插件-全局使用 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
