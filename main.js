import Vue from 'vue'
import App from './App'
import {router,RouterMount} from './router.js'  //路径换成自己的
Vue.use(router)

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()
