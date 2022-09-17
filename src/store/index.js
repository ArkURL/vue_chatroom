import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {

}

const mutations = {
    CHANGE_USERNAME(state, name) {
        state.name = name
    }
}

const state = {
    name: ''
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})