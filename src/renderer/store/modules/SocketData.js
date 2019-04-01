 const state = {
   connectStatus: false,
   info: true,
   message: 'nothing',
   portsettings: Object
 }
 const getters = {
   getPortSet: state => state.portsettings
 }
 const mutations = {
   SOCKET_CONNECT(state) {
     state.connectStatus = true
   },
   setPort(state, val) {
     state.portsettings = val
   },
   downloader(state, val) {
     state.infoList.push(val)
   },
   changeContent(state, val) {
     state.message = val
   },
   changeInfo: (state, val) => {
     state.info = val
   },
   SetPortSettings: (state, val) => {
     state.portsettings = val
   }
 }
 const actions = {
   SOCKET_LOGIN: ({
     commit
   }, val) => {
     commit('SOCKET_LOGIN', val)
   },
   SOCKET_PORTSET: ({
     commit
   }, val) => {
     commit('setPort', val)
   },
   SOCKET_DOWNLOADER: ({
     commit
   }, val) => {
     commit('setPort', val)
   },
   changeContent: ({
     commit
   }, val) => {
     commit('changeContent', val)
   },
   changeInfo: ({
     commit
   }, val) => {
     commit('changeInfo', val)
   },
   SetPortSettings: ({
     commit
   }, val) => {
     console.log('actions:[Port]:', val)
     commit('SetPortSettings', val)
   }
 }
 export default {
   state,
   getters,
   mutations,
   actions
 }