import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import {
  createPersistedState,
  createSharedMutations
} from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoList: [],
    percentage: 0
  },
  getters: {
    getInfoList: state => state.infoList,
    getPercentage: state => state.percentage
  },
  mutations: {
    addInfo: (state, val) => state.infoList.unshift(val),
    clearInfo: state => state.infoList = [],
    changePercent: (state, val) => state.percentage = val
  },
  actions: {
    addInfo(context, data) {
      let time = moment().format('h:mm:ss SSS')
      let html =
        `<span class="time">${time} > </span>
        <span class="info-${data.type&&data.type.toLowerCase()}">
      <strong>${data.type&&data.type.toUpperCase()}</strong>
      </span>
      <span>${data.message}</span>`
      context.commit('addInfo', html)
    },
    clearInfo(context) {
      context.commit('clearInfo')
    },
    changePercent(context, data) {
      context.commit('changePercent',data)
    }
  },
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})