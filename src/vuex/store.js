import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    abc: 'aaaaaaaaaaaaaa',
    count: 0,
    exms: true
}
const mutations = {
    mutationName(state, fms) {
        //在这里改变state中的数据
        state.exms = fms;
    }
}

// export default store

export default new Vuex.Store({
    state,
    mutations
})