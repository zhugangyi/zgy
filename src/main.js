import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
// import store from './store'
import ElementUI from 'element-ui'
import Axios from 'axios'
import Utils from './utils/utils'
import myutils from './utils/myutils'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import moment from 'moment'
import echarts from 'echarts'
import Export2Excel from '@/vendor/Export2Excel';
import BaiduMap from 'vue-baidu-map'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

Vue.filter('comverTime',function(data,format){
  return moment(data).format(format);
})
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(BaiduMap, {ak: 'iqxK84HGm7Imbrz5vU0FhMv1Ikstx7AW'})
Vue.prototype.$http = Axios
Vue.prototype.Utils = Utils
Vue.prototype.myutils = myutils
Vue.prototype.$echarts = echarts


var store = new Vuex.Store({
  state: {
    recruitScrollY:0
  },
  getters: {
    recruitScrollY:state => state.recruitScrollY
  },
  mutations: {
    changeRecruitScrollY(state,recruitScrollY) { 
      state.recruitScrollY = recruitScrollY
    }
  },
  actions: {
 
  },
  modules: {}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
