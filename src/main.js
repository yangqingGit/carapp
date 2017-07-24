// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Vuex from 'vuex'
import store from './vuex/store'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(MuseUI)
Vue.use(Vuex)

// const store = new Vuex.Store({
//     // 定义状态
//     state: {
//         author: 'Wise Wrong'
//     }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: store, //注入到vue
    template: '<App/>',
    components: { App }
})