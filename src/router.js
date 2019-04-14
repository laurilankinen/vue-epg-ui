import Vue from 'vue'
import Router from 'vue-router'
import ProgramGuide from './views/program-guide/ProgramGuide.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'program-guide',
      component: ProgramGuide
    }
  ]
})
