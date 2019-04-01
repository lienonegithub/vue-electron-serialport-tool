import Vue from 'vue'
import Router from 'vue-router'
import ParamsSetting from '@/components/ParamsSettingPage'
import DownloadProgram from '@/components/DownloadProgramPage'
import Home from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/params-setting',
      name: 'params-setting',
      component: ParamsSetting
    },
    {
      path: '/download',
      name: 'download',
      component: DownloadProgram
    }
  ]
})